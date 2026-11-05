import ProfileCard from './components/ProfileCard'
import './App.css'

export default function App() {
    const profileData = {
        name: 'Студент',
        group: 'КН-31',
        skills: ['React 19', 'TypeScript', 'Next.js'],
    }

    return (
        <main className="app-container">
            <h1>Картка студента</h1>
            <ProfileCard
                name={profileData.name}
                group={profileData.group}
                skills={profileData.skills}
            />
        </main>
    )
}
