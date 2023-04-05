class WinterProduct extends React.Component {
    state = {
        dataList: JSON.parse(jsonString)
    }
    render() {
        return <React.Fragment>
            <div id="container">
                <h3>冬季限定</h3>
                <hr />
                <div id="cardbox">
                    {
                        this.state.dataList.map((data, index) => {
                            return (
                                <div className="card" key={data.id}>
                                    <div><img src={data.imgUrl} alt="product" /></div>
                                    <div className="product">{data.title}</div>
                                    <div className="price">{data.price}</div>
                                    <button addcart={data}
                                        onClick={() => this.openModal(index)}>加入購物車</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    }

    openModal = (index) => {
        document.body.style.overflow = "hidden";
        var newState = { ...this.state.dataList }
        var notelist = newState[index].note.split(",")
        document.getElementById("myModal").style = `display:block;`

        const myElement = (
            <div className="itemModal-content animate">
                <div className="itemModal-container">
                    <div className="itemModal-grid-container">
                        <div className="element1"><img src={newState[index].imgUrl} alt="product" /></div>
                        <div className="element2">{newState[index].title}</div>
                        <div className="element3">{newState[index].info}</div>
                        <div className="element4">
                            {
                                notelist.map((instr, num) => {
                                    return (
                                        <li key={num}>{instr}</li>
                                    )
                                })

                            }
                        </div>
                        <div className="element5">{newState[index].price}</div>
                        <div className="element6">數量：
                            <select name="mySelect">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select >
                        </div >
                        <div className="element7">
                            Photo by&nbsp;
                            <a href={newState[index].PhotoByLink} target="_blank">{newState[index].PhotoBy}</a>
                            &nbsp;on&nbsp;<a href={newState[index].PhotoLink} target="_blank">Unsplash</a>
                        </div>
                    </div >

                    <button type="button">加入購物車</button>
                    <button id="canceladdbtn" type="button" onClick={() => this.CancelAdd}
                        className="cancelbtn">取消</button>
                </div >
            </div >
        )

        ReactDOM.render(myElement, document.getElementById('myModal'));
    }

    componentDidMount() {
        document.getElementById("myModal").addEventListener("mousedown", this.CancelAdd)
    }

    componentWillUnmount() {
        document.getElementById("myModal").removeEventListener('mousedown', this.CancelAdd);
    }

    CancelAdd = (event) => {
        var modal = document.getElementById('myModal');
        var cancelbtn = document.getElementById('canceladdbtn');

        if (event.target == modal || event.target == cancelbtn) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    }
}

ReactDOM.render(<WinterProduct />, document.getElementById('WinterCake'))
