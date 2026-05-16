import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import AuthModal from './components/AuthModal';
import CoursePurchaseModal from './components/CoursePurchaseModal';
import ContactModal from './components/ContactModal';
import PaidCoursesPage from './pages/PaidCoursesPage';
import FreeCoursesPage from './pages/FreeCoursesPage';
import RecordedCoursesPage from './pages/RecordedCoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import PurchasesPage from './pages/PurchasesPage';
import StudyMaterialPage from './pages/StudyMaterialPage';
import { courses as allCourses } from './data/courses.json';

function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(allCourses.paidCourses[0]);

  const handleBuyCourse = (course: typeof allCourses.paidCourses[0]) => {
    setSelectedCourse(course);
    setPurchaseModalOpen(true);
  };

  return (
    <Router>
      <main className="relative min-h-screen overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                onLogin={() => setAuthModalOpen(true)}
                onBuyCourse={handleBuyCourse}
                onContact={() => setContactModalOpen(true)}
              />
            }
          />
          <Route
            path="/paid-courses"
            element={
              <PaidCoursesPage
                onBuyCourse={handleBuyCourse}
              />
            }
          />
          <Route
            path="/free-courses"
            element={<FreeCoursesPage />}
          />
          <Route
            path="/recorded-courses"
            element={
              <RecordedCoursesPage
                onBuyCourse={handleBuyCourse}
              />
            }
          />
          <Route
            path="/courses/:id"
            element={
              <CourseDetailPage
                onBuyCourse={handleBuyCourse}
              />
            }
          />
          <Route
            path="/purchases"
            element={<PurchasesPage />}
          />
          <Route
            path="/study-material"
            element={<StudyMaterialPage />}
          />
          {/* Placeholder routes for other pages */}
          <Route path="/quick-links" element={<div className="pt-20 p-8 text-center">Quick Links - Coming Soon</div>} />
          <Route path="/timetable" element={<div className="pt-20 p-8 text-center">Live / Timetable - Coming Soon</div>} />
          <Route path="/test-series" element={<div className="pt-20 p-8 text-center">Test Series - Coming Soon</div>} />
          <Route path="/terms" element={<div className="pt-20 p-8 text-center">Terms & Conditions - Coming Soon</div>} />
          <Route path="/privacy-policy" element={<div className="pt-20 p-8 text-center">Privacy Policy - Coming Soon</div>} />
          <Route path="/refund-policy" element={<div className="pt-20 p-8 text-center">Refund Policy - Coming Soon</div>} />
        </Routes>

        {/* Auth Modal - Available globally */}
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
        />

        {/* Course Purchase Modal */}
        <CoursePurchaseModal
          course={selectedCourse}
          isOpen={purchaseModalOpen}
          onClose={() => setPurchaseModalOpen(false)}
        />

        {/* Contact Modal */}
        <ContactModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      </main>
    </Router>
  );
}

export default App;