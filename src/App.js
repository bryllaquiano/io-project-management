import './styles/App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Logo from './components/navigation/Logo';
import { ToDo, InProgress, Done } from './components/utility/ExportKanban';
import MobileNav from './components/navigation/mobile_nav/MobileNav';

const App = () => {
    return (
        <div className='app-container'>
            <div className='logo-container'>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Logo}></Route>
                    </Switch>
                </Router>
            </div>
            {/* .logo-container */}

            <div className='project-info-container'>

                <div className='project-title-container'>
                    <h1>Project Title</h1>
                </div>
                {/* .project-title-container */}

                <div className='deadline-container'>
                    <p>Due date: <span id='deadline-date' contentEditable='true'>01/01/2022</span></p>
                </div>
                {/* .deadline-container */}

                <div className='edit-members-container'>
                    <button><span>Add/edit members</span></button>
                </div>
                {/* .edit-members-container */}
            </div>
            {/* .project-info-container */}

            <div className='kanban-container'>
                <ToDo />
                <InProgress />
                <Done />
            </div>
            {/* .kanban */}

            <div className='mobile-nav-container'>
                <MobileNav />
            </div>

        </div>
    )
}

export default App;