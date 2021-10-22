import './styles/App.css';
import { ToDo, InProgress, Done } from './components/utility/ExportKanban';
import MobileNav from './components/navigation/mobile_nav/MobileNav';

const App = () => {
    return (
        <div className='app-container'>
            <div className='project-info-container'>

                <div className='project-title-container'>
                    <h1>Project Title</h1>
                </div>
                {/* .project-title-container */}

                <div className='deadline-container'>
                    <p>Due date: 01/01/2022</p>
                </div>
                {/* .deadline-container */}

                <div className='edit-members-container'>
                    <button>Add/edit members</button>
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
                <MobileNav/>
            </div>

        </div>
    )
}

export default App;