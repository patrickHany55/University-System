import './catalogcard.css'

const CatalogCard = ({ name, icon, description, totalCourses, color, onClick }) => {
    return (
        <div 
            className="catalog-card" 
            onClick={onClick}
            style={{ borderTopColor: color }}
        >
            <div className="catalog-icon" style={{ backgroundColor: color }}>
                {icon}
            </div>
            <h3 className="catalog-name">{name}</h3>
            <p className="catalog-description">{description}</p>
            <div className="catalog-footer">
                <span className="course-count">📚 {totalCourses} Courses</span>
                <button className="view-btn" style={{ backgroundColor: color }}>
                    View Courses →
                </button>
            </div>
        </div>
    );
};

export default CatalogCard;