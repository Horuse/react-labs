import { useState } from 'react'

export default function ProfileCard({ name, group, skills }) {
    const [likes, setLikes] = useState(0)

    const handleLike = () => {
        setLikes((prevLikes) => prevLikes + 1)
    }

    return (
        <article className="profile-card">
            <h2>{name}</h2>
            <p className="profile-group">
                <strong>Група:</strong> {group}
            </p>

            <section className="profile-skills">
                <h3>Технології для вивчення:</h3>
                <ul>
                    {skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </section>

            <button type="button" className="like-button" onClick={handleLike}>
                👍 Подобається: {likes}
            </button>
        </article>
    )
}
