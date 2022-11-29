const React = require('react')

class New extends React.Component {
    render() {
        return (
            <div>New Page
                <h1>New Vegetable Page</h1>
                <nav>
                    <a style ={{color:"red"}} href = "/vegetables">Back to Home Page</a>
                </nav>
                {/* NOTE: action will be the route, method will be the HTTP verb
                This creates the HTML form */}
                <form action="/vegetables" method = "POST">
                    Name: <input type="text" name ="name"/><br />
                    Color: <input type="text" name ="color"/><br />
                    Is Ready To Eat: <input type="checkbox" name ="readyToEat"/><br />
                    <input type="submit" value="Create New Vegetable"/>
                </form>
            </div>
        )
    }
}

module.exports = New