import React from 'react';
import Layout from "./components/Layout/Layout";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ContactList from "./containers/ContactList/ContactList";
import AddContact from "./containers/AddContact/AddContact";
import './App.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={ContactList}/>
                        <Route path="/add" component={AddContact}/>
                        <Route render={() => <h1>404</h1>}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </div>
    );
}

export default App;
