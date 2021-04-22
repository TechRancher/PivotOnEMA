#
# Pivot RSI
# Author: TechRancher
# Date: 04/2021
# Follow me at Git Hub:
# https://www.github.com/TechRancher
# This Relative Strength Index (RSI) is used
# with a Strategy I call "Pivot On EMA"
# You can learn more about this strategy at:
# https://www.github.com/TechRancher/PivotOnEMA/
#

declare lower;

input RSI_length = 14;
input RSI_average_type = AverageType.WILDERS;
input RSI_price = close;
input KPeriod = 14;
input DPeriod = 3;
input slowing_period = 1;
input averageType = AverageType.SIMPLE;

# Define Variables 
def RSI = RSI(price = RSI_price, length = RSI_length, averageType = RSI_average_type);
def over_bought = 80; # I have set this as non-adjustable for the Pivot Strategy RSI.
def over_sold = 20; # I have set this as non-adjustable for the Pivot Strategy RSI.

# Plot Definitions
plot FullK = StochasticFull(over_bought, over_sold, KPeriod, DPeriod, RSI, RSI, RSI, slowing_period, averageType).FullK;
plot FullD = StochasticFull(over_bought, over_sold, KPeriod, DPeriod, RSI, RSI, RSI, slowing_period, averageType).FullD;
plot OverBought = over_bought;
plot OverSold = over_sold;
AddCloud(OverSold, OverBought, CreateColor(0, 219, 104), CreateColor(255, 143, 87), yes);

FullK.SetDefaultColor(GetColor(5));
FullD.SetDefaultColor(GetColor(0));
OverBought.SetDefaultColor(GetColor(1));
OverSold.SetDefaultColor(GetColor(1));
