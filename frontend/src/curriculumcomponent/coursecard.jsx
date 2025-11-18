import { useState } from "react";
import './coursecard.css'

const CourseCard = ({ 
    code, 
    title, 
    description,
    credits, 
    type, 
    instructor, 
    enrolled, 
    capacity, 
    schedule
}) => {

    const [isOpen, setIsOpen] = useState(false);

    const isFull = enrolled >= capacity;
    const availableSeats = capacity - enrolled;

    return (
        <div className="course-card">
            <div className="course-header">
                <span className="course-code">{code}</span>
                <span className={`course-type-badge ${type}`}>
                    {type === 'core' ? '🔵 Core' : '🟢 Elective'}
                </span>
            </div>

            <h3 className="course-title">{title}</h3>
            <p className="course-description">{description}</p>

            {/* Collapsible section */}
            <div className={`course-info ${isOpen ? "expanded" : ""}`}>
                <div className="info-row">
                    <span className="info-label">👨‍🏫 Instructor:</span>
                    <span>{instructor}</span>
                </div>
                <div className="info-row">
                    <span className="info-label">📚 Credits:</span>
                    <span>{credits}</span>
                </div>
                <div className="info-row">
                    <span className="info-label">📅 Schedule:</span>
                    <span>{schedule.days.join(', ')}</span>
                </div>
                <div className="info-row">
                    <span className="info-label">🕐 Time:</span>
                    <span>{schedule.time}</span>
                </div>
                <div className="info-row">
                    <span className="info-label">📍 Room:</span>
                    <span>{schedule.room}</span>
                </div>
                <div className="info-row">
                    <span className="info-label">👥 Seats:</span>
                    <span className={isFull ? 'seats-full' : 'seats-available'}>
                        {enrolled}/{capacity} 
                        {isFull ? ' (FULL)' : ` (${availableSeats} available)`}
                    </span>
                </div>
            </div>

            <div className="course-actions">
                <button 
                    className="btn-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? "Hide Details" : "View Details"}
                </button>
            </div>
        </div>
    );
};

export default CourseCard;
