///Object Method

var helloWorld = {}; // create object

name = "Melissa Ugrai";  /// name property
hngId = "HNG-00487";    /// HNGi7 ID property
language = "javaScript";   /// language property
email = "mugrai@gmail.com";  // email property

var runScript =  function()   ///run function to add string together
{
  console.log( "Hello World, this is " + this.name + " with HNGi7 ID " + this.hngId +" using " + this.language + " for stage 2 task " + this.email);  /// console. log with string combination
};  /// end of function

runScript();  ///call function to run