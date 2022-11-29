const React = require('react')
const DefaultLayout = require('../layout/Default')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title = {this.props.title}>
                <nav>
                    <a style ={{color:"red"}} href = "/fruits">Back to Home Page</a>
                </nav>
                {/* NOTE: action will be the route, method will be the HTTP verb
                This creates the HTML form */}
                <form action="/fruits" method = "POST">
                    Name: <input type="text" name ="name"/><br />
                    Color: <input type="text" name ="color"/><br />
                    Is Ready To Eat: <input type="checkbox" name ="readyToEat"/><br />
                    <input type="submit" value="Create New Fruit"/>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = New