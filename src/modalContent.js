const parser = new DOMParser();

const rawContent = `
<div class="modal-content">
<span id="close" class="close">&times;</span>
<h2>What is this?</h2>
This website presents you with a set of data that has a nonlinear relationship
between the dependent and independent variables. You can alter how the data is plotted
to reveal this relationship. The point of the sim is to familarize you with a
particular data analysis technique: plotting a variable vs. a function of another variable
in order to create a linear plot.
<br><br>
The graph initially displays a set of data where the dependent variable is plotted against
the independent variable. The two variables are related by some power law. (<i>i.e.</i>
They fit the equation <i>y=Ax<sup>B</sup></i>.) The data also has a little bit of noise in it.
Notice how the plot changes when you select different horizontal axes for the same dataset.
One option should make the plot nearly linear, and you can determine the equation of the line of best fit 
for this plot. You can confirm your understanding of the relationship by plotting the equation you determine. 
Note that it fits the data regardless of the subsequent axis choice.

<h2>What is going on with the units of the slope?</h2>
An equation that related different measurements only makes sense if the numerical quantities in it have units.
Any numberical coefficients must also have units. This sim unfortunately
does not always display a coefficient's combination of units in the most simplified form, but the upside of this
is that you can see that how the units relate to the units of the quantities on each axis.

<h2>Why not fit the raw data with a curve instead of transforming the data to linearize it?</h2>
There are advantages to both methods. One advantage of linearizing is that it helps us spot both outliers and
systematic deviations from our model equation. Another advantage is that it requires less technology than nonlinear
curve-fitting.
However, the main reason I believe linearing data should continue to be taught is that it improves students'
understanding of proportionality, variation, and the meaning of power laws. Articulating your interpretation of the slope of these graphs
is a worthwhile exercise.

<h2>Do the different datasets refer to specifc experiments?</h2>
The data is randomally generated, but the choice of variables relates to specific experiments that I expect to have particular 
power law relationships. I made an effort to make the values somewhat realistic but prioritized making the range wide enough to
 distinguish between different power fits.

 <h2>Why are there sometimes prominent outliers? </h2>
 Linearizing the data invovles stretching/compressing the horizontal axis unevenly. This amplifies small measurement errors at the
 high or low values of the independent variable when the values are squared or inverted and squared, respectively.
</div>`;

const modalContent = parser.parseFromString(rawContent, 'text/html').documentElement.getElementsByClassName('modal-content')[0];

export default modalContent;
