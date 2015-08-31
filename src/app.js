var Transformer = React.createClass({
    getInitialState: function() {
        return {
            input: "write your JSX code here",
            output: "",
            err: ""
        }
    },

    update: function(e) {
        var code = e.target.value;

        try{
            this.setState({
                output: JSXTransformer.transform(code).code,
                err: ""
            })
        }

        catch(err) {
            this.setState({
                err: err.message
            })
        }
    },

    render: function() {
        return (
            <div>
                <h1>jsx live compiler</h1>
                <div style={{
                    padding: "20px"
                }}>
                    <p>{this.state.err}</p>
                </div>
                <div>
                    <textarea style={{
                        width: "200px",
                        height: "500px",
                        float: "left",
                        margin: "0 20px 0 0"
                    }} defaultValue={this.state.input} onChange={this.update} />
                    <pre style={{float:"left"}}>{this.state.output}</pre>
                </div>
            </div>
        );
    }
});

React.render(
    <Transformer />,
    document.getElementById('app')
);