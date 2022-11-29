const React = require('react')

class Show extends React.Component {
   render () {
    const vegetable = this.props.vegetable
    console.log(this.props.vegetable)
    return (
    <div>
        <h1> Show Page </h1>
        <nav>
            <a style ={{color:"red"}} href = "/vegetables">Back to Home Page</a>
        </nav>
        <div>
            <p>The {vegetable.name} is {vegetable.color}.<br /></p>
            {vegetable.readyToEat ? " It is ready to eat" : "It is not ready to eat, don't touch that!"}
        </div>
    </div>
     );
    }
 }

module.exports  = Show;