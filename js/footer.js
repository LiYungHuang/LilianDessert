class Footer extends React.Component {
    render() {
        return <React.Fragment>
            <footer>
                <table>
                    <thead>
                        <tr>
                            <th>About US</th>
                            <th>Customer Service</th>
                            <th>Contact US</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <li>常見問題</li>
                                <li>訂單查詢</li>
                                <li>物流及退貨說明</li>
                            </td>
                            <td>
                                <li>服務時間：週一至週五 9:30~18:00(國定假日除外)</li>
                                <li>產品諮詢&線上購物服務專線: 0800-211-198</li>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </footer>
        </React.Fragment>
    }
}

ReactDOM.render(<Footer />, document.getElementById('footer'))
