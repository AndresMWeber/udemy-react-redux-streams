import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={StreamList} />
                    <Route exact path="/streams/new" component={StreamCreate} />
                    <Route exact path="/streams/edit" component={StreamEdit} />
                    <Route exact path="/streams/delete" component={StreamDelete} />
                    <Route exact path="/streams/show" component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App