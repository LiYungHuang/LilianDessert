class HeaderNav extends React.Component {
    state = {
        page: true,
        userinfo: { username: "", password: "" },
        reginfo: { name: "", username: "", password: "", email: "" }
    }
    render() {
        return <React.Fragment>
            <header id="header"><img src="image/01_index/LianDessert.png" /></header>
            <nav id="nav">
                <ul>
                    <img id="logo_s" />
                    <li><a href="./index.html">首 頁</a></li>
                    <li><a href="./Patisserie.html">產品購買</a></li>
                    <li><a href="./map.html">門市資訊</a></li>
                    <li><div id="memberbtn" onClick={() => this.sign()}>登入/註冊</div></li>
                    <li><div id="membercenterbtn" onClick={() => this.sign()}>會員 中心</div></li>
                </ul>
            </nav>
            <div id="id01" className="modal"></div>
        </React.Fragment>
    }

    sign = () => {
        document.body.style.overflow = "hidden";
        document.getElementById("memberbtn").style = `display:none;`;
        document.getElementById("membercenterbtn").style = `display:block;`;
        document.getElementById("id01").style.display = "block";

        const login = (
            <div className="modal-content animate">
                <div className="container">
                    <div className="grid_container">
                        <div className="tab">
                            <button className="tablink" onClick={() => this.openPage('Login', true)}>會員登入</button>
                            <button className="tablink" onClick={() => this.openPage('Register', false)}>註冊</button>
                        </div>
                        <div className="tabcontent">
                            <form id="Login">
                                <div className="item1">
                                    <label htmlFor="uname">帳號：</label>
                                    <input type="text" placeholder="Enter Account Number" id="uname" required
                                        onChange={this.doUnameChange} />
                                </div>
                                <div className="item2">
                                    <label htmlFor="psw">密碼：</label>
                                    <input type="password" placeholder="Enter Password" id="psw" required
                                        onChange={this.doPswChange} />
                                </div>
                                <div id="loginmessage"></div>
                                <div className="item3"><a href="#">忘記密碼?</a></div>

                                <button type="button" onClick={() => this.Summitbtn(this.state.page)} id="submitbtn">登入</button>
                                <button type="button" onClick={() => this.CancelLogin} id="cancelbtn">取消</button>
                            </form>
                            <form id="Register">
                                <div className="item4">
                                    <label id="name" htmlFor="rname">姓名：</label>
                                    <input type="text" placeholder="Enter Your name" id="rname" required
                                        onChange={this.dorNameChange} />
                                </div>
                                <div className="item5">
                                    <label htmlFor="runame">帳號：</label>
                                    <input type="text" placeholder="Enter Account Number" id="runame" required
                                        onChange={this.dorUnameChange} />
                                </div>
                                <div className="item6">
                                    <label htmlFor="rpsw">密碼：</label>
                                    <input type="password" placeholder="Enter Password" id="rpsw" required
                                        onChange={this.dorPswChange} />
                                </div>
                                <div className="item7">
                                    <label htmlFor="rmail">電子信箱：</label>
                                    <input type="text" placeholder="Enter Email" id="rmail" required
                                        onChange={this.dorEmailChange} />
                                </div>

                                <button type="button" onClick={() => this.Summitbtn(this.state.page)} id="rsubmitbtn">快速註冊</button>
                                <button type="button" onClick={() => this.CancelLogin} id="cancelregbtn">取消</button>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        )
        ReactDOM.render(login, document.getElementById('id01'));
    }

    openPage = (pageName, page) => {
        var newState = { ...this.state }
        var tabLogin = document.getElementById('Login');
        var tabRegister = document.getElementById('Register');
        var tablinks = document.getElementsByClassName("tablink");

        if (pageName == 'Login') {
            tabRegister.style.display = "none";
            tablinks[1].style = `background-color:#e6e6e6;
                                border-bottom:#cccccc 0.5px solid;`;
            tabLogin.style.display = "block";
            tablinks[0].style = `background-color: white;
                                border-right: #cccccc 0.5px solid;`;

            newState.page = page;
            this.setState(newState)
        }
        else if (pageName == 'Register') {
            tabLogin.style.display = "none";
            tablinks[0].style = `background-color:#e6e6e6;
                                border-bottom:#cccccc 0.5px solid;`;
            tabRegister.style.display = "block";
            tablinks[1].style = `background-color: white;
                                border-left: #cccccc 0.5px solid;`;

            newState.page = page;
            this.setState(newState)
        }
        else {
            alert("No Tab CLICK!!");
        }
    }

    doUnameChange = (e) => {
        var newState = { ...this.state };
        newState.userinfo.username = e.target.value;
        this.setState(newState)
    }

    doPswChange = (e) => {
        var newState = { ...this.state };
        newState.userinfo.password = e.target.value;
        this.setState(newState)
    }

    dorNameChange = (e) => {
        var newState = { ...this.state };
        newState.reginfo.name = e.target.value;
        this.setState(newState)
    }

    dorUnameChange = (e) => {
        var newState = { ...this.state };
        newState.reginfo.username = e.target.value;
        this.setState(newState)
    }

    dorPswChange = (e) => {
        var newState = { ...this.state };
        newState.reginfo.password = e.target.value;
        this.setState(newState)
    }

    dorEmailChange = (e) => {
        var newState = { ...this.state };
        newState.reginfo.email = e.target.value;
        this.setState(newState)
    }

    Summitbtn = (page) => {
        var newState = { ...this.state };
        const recipeUrl = 'js/json/userdata.js';
        if (page == true) {
            const requestMetadata = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newState.userinfo)
            };

            fetch(recipeUrl, requestMetadata).then(response => {
                const result = response.text()
                result.then(body => {
                    var userString = JSON.parse(body)
                    let successLogin = false;
                    userString.map(info => {
                        if (info.username == newState.userinfo.username && info.password == newState.userinfo.password) {
                            document.getElementById('loginmessage').innerHTML = "Login Success";
                            successLogin = true;
                        }
                    })
                    if (successLogin == true) {
                        document.body.style.overflow = "none";
                        setTimeout(() => window.location = location.href, 2);
                    } else if (successLogin == false) {
                        document.getElementById('loginmessage').innerHTML = "Login Fail";
                        let inputlist = document.querySelectorAll("input");
                        for (let i = 0; i < inputlist.length; i++) {
                            inputlist[i].value = "";
                        }
                    }
                })
            })
        } else if (page == false) {
            const requestMetadata = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newState.reginfo)
            };

            fetch(recipeUrl, requestMetadata).then(response => {
                const result = response.text()
                result.then(body => {
                    var userString = JSON.parse(body)
                    console.log(userString)
                    console.log(newState.reginfo)
                })
            })
        }
    }

    componentDidMount() {
        document.getElementById("id01").addEventListener("mousedown", this.CancelLogin)
    }

    componentWillUnmount() {
        document.getElementById("id01").removeEventListener('mousedown', this.CancelLogin);
    }

    CancelLogin = (event) => {
        var modal = document.getElementById('id01');
        var cancelbtn = document.getElementById('cancelbtn');
        var cancelregbtn = document.getElementById('cancelregbtn');

        if (event.target == modal || event.target == cancelbtn || event.target == cancelregbtn) {
            modal.style.display = "none";
            let inputlist = document.querySelectorAll("input");
            for (let i = 0; i < inputlist.length; i++) {
                inputlist[i].value = "";
            }
            document.getElementById('loginmessage').innerHTML = "";
            document.getElementById("membercenterbtn").style = `display:none;`;
            document.getElementById("memberbtn").style = `display:block;`;
            document.body.style.overflow = "none";
        }
    }
}

ReactDOM.render(<HeaderNav />, document.getElementById('headerNav'))