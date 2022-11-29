const React = require('react')
const DefaultLayout = require('../layout/Default')


class Show extends React.Component {
    render() {
        const fruit = this.props.fruit
        console.log(this.props.fruit)
        return (
            <DefaultLayout title="New Fruits Page">
                <nav>
                    <a style={{ color: "red" }} href="/fruits">Back to Home Page</a>
                </nav>
                <div>
                    <p>The {fruit.name} is {fruit.color}.<br /></p>
                    {fruit.readyToEat ? " It is ready to eat" : "It is not ready to eat, don't touch that!"}
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = Show;