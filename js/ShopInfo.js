class ShopInfo extends React.Component {
    state = {
        dataList: JSON.parse(shoplocation)
    }
    render() {
        return <React.Fragment>
            <div id="cityselect">
                <label htmlFor="city">請選擇欲查詢縣市：
                    <select name="city" id="city" onChange={this.ChoseCity}>
                        <option value=""></option>
                        <option value="Keelung">基隆</option>
                        <option value="Taipei">台北</option>
                        <option value="NewTaipei">新北</option>
                        <option value="Taoyuan">桃園</option>
                        <option value="Hsinchu">新竹</option>
                        <option value="Taichung">台中</option>
                        <option value="Chiayi">嘉義</option>
                        <option value="Tainan">台南</option>
                        <option value="Kaohsiung">高雄</option>
                        <option value="Hualien">花蓮</option>
                    </select>
                </label>
            </div>
            <div id="citybox">
                {
                    this.state.dataList.map((data, index) => {
                        return (
                            <div id="shoplocbox" key={data.id}>
                                <div><b>{data.country} - {data.shopname}</b></div>
                                <div>營業時間：{data.weekday}，{data.time}</div>
                                <div>門市地址：{data.address}</div>
                                <div id="div4">
                                    <button id="seeonmap" ind={index}
                                        onClick={() => this.Clickshop(data)}
                                    >&nbsp;在地圖上觀看&nbsp;</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    }

    ChoseCity = () => {
        var initnewState = {
            dataList: JSON.parse(shoplocation)
        };
        var newState = initnewState;
        var x = document.getElementById("city");
        var y = x.selectedIndex;
        if (x.options[y].text == "") {
            this.setState(newState);
            map.setZoom(7)
            map.setCenter({ lat: 23.72668659190344, lng: 120.875495021423 })
        }
        else {
            newState.dataList = newState.dataList.filter(function (c) {
                return c.country === x.options[y].text;
            });
            this.setState(newState);
        }
    }

    Clickshop = (y) => {
        var point = { lat: parseFloat(y.latitude), lng: parseFloat(y.longitude) }
        map.setZoom(15)
        map.panTo(point)
    }

}

ReactDOM.render(<ShopInfo />, document.getElementById('shopinfo'))
