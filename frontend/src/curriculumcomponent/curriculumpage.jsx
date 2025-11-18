import { useState } from 'react';
import CatalogCard from './catalogcard';
import CourseCard from './coursecard';
import { catalogsData } from '../data/coursecatalog';
import { coursesData } from '../data/coursedata';
import './curriculumpage.css';

const Curriculum = () => {
    const [selectedCatalog, setSelectedCatalog] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');

    // Get courses for selected catalog
    const getCoursesForCatalog = (catalogId) => {
        return coursesData.filter(course => course.catalogId === catalogId);
    };

    // Filter courses based on search and type
    const filteredCourses = selectedCatalog 
        ? getCoursesForCatalog(selectedCatalog.id).filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                course.code.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesFilter = filterType === 'all' || course.type === filterType;
            return matchesSearch && matchesFilter;
          })
        : [];

    // Handle catalog selection
    const handleCatalogClick = (catalog) => {
        setSelectedCatalog(catalog);
        setSearchTerm('');
        setFilterType('all');
    };

    // Handle back to catalogs
    const handleBackToCatalogs = () => {
        setSelectedCatalog(null);
        setSearchTerm('');
        setFilterType('all');
    };

    return (
        <div className="curriculum-container">
            {/* Hero Section */}
            <section className="curriculum-hero">
                <div className="hero-content">
                    <h1>Academic Curriculum</h1>
                    <p>Browse course catalogs, manage your courses, and track your academic progress</p>
                </div>
            </section>

            {/* Main Content */}
            {!selectedCatalog ? (
                // Show Catalogs View
                <>
                    <section className="catalogs-section">
                        <div className="section-header">
                            <h2>Course Catalogs</h2>
                            <p>Select a department to view available courses</p>
                        </div>
                        <div className="catalogs-grid">
                            {catalogsData.map(catalog => (
                                <CatalogCard 
                                    key={catalog.id}
                                    {...catalog}
                                    onClick={() => handleCatalogClick(catalog)}
                                />
                            ))}
                        </div>
                    </section>
                </>
            ) : (
                // Show Courses View
                <>
                    {/* Breadcrumb Navigation */}
                    <section className="breadcrumb">
                        <button onClick={handleBackToCatalogs} className="back-btn">
                            ← Back to Catalogs
                        </button>
                        <span className="breadcrumb-text">
                            Course Catalogs / <strong>{selectedCatalog.name}</strong>
                        </span>
                    </section>

                    {/* Catalog Header */}
                    <section className="catalog-header">
                        <div className="catalog-title-section">
                            <div className="catalog-icon-large" style={{ backgroundColor: selectedCatalog.color }}>
                                {selectedCatalog.icon}
                            </div>
                            <div>
                                <h2>{selectedCatalog.name}</h2>
                                <p>{selectedCatalog.description}</p>
                            </div>
                        </div>
                    </section>

                    {/* Search and Filter */}
                    <section className="course-search-section">
                        <div className="search-filter-container">
                            <input
                                type="text"
                                placeholder="Search courses by name or code..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="search-input"
                            />
                            <div className="filter-buttons">
                                <button 
                                    className={filterType === 'all' ? 'active' : ''}
                                    onClick={() => setFilterType('all')}
                                >
                                    All Courses
                                </button>
                                <button 
                                    className={filterType === 'core' ? 'active' : ''}
                                    onClick={() => setFilterType('core')}
                                >
                                    Core
                                </button>
                                <button 
                                    className={filterType === 'elective' ? 'active' : ''}
                                    onClick={() => setFilterType('elective')}
                                >
                                    Electives
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* Courses Grid */}
                    <section className="courses-section">
                        <div className="courses-count">
                            <p>Showing {filteredCourses.length} course(s)</p>
                        </div>
                        <div className="courses-grid">
                            {filteredCourses.map(course => (
                                <CourseCard key={course.id} {...course} />
                            ))}
                        </div>
                        {filteredCourses.length === 0 && (
                            <p className="no-results">No courses found matching your criteria.</p>
                        )}
                    </section>
                </>
            )}

            {/* LMS Integration Section */}
            <section className="lms-section">
                <div className="lms-content">
                    <h2>Learning Management System</h2>
                    <p>Access online assignments, quizzes, multimedia content, and course materials through our integrated LMS platform.</p>
                    <button className="lms-button">Go to LMS Portal →</button>
                </div>
            </section>
        </div>
    );
};

export default Curriculum;