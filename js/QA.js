class QuesAns extends React.Component {
    state = {
        dataList: JSON.parse(QAString)
    }
    render() {
        return <React.Fragment>
            <div id="container">
                <h3>常見問題</h3>
                <hr />
                <div id="cardbox">
                    {
                        this.state.dataList.map((data, index) => {
                            return (
                                <div className="QA" key={data.id}>
                                    <div className="question" onClick={()=> this.openanswer(index)}>{data.ques} &rsaquo;&rsaquo;</div>
                                    <div id="answer" className="answer">{data.ans}</div>
                                    <hr id="hrcss"></hr>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    }

    openanswer = (index) => {
        var clsy = document.querySelectorAll("#answer");
        var opxheight = clsy[index].style.maxHeight
        
        clsy.forEach( anscontent => {
            anscontent.style.maxHeight = null;
        })
        clsy[index].style.maxHeight = opxheight;
        if (clsy[index].style.maxHeight) {
            clsy[index].style.maxHeight = null;
        }
        else {
            clsy[index].style.maxHeight = clsy[index].scrollHeight + "px"
        }
    }

}

ReactDOM.render(<QuesAns/>, document.getElementById('mostQA'))
