import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import CoursePurchaseModal from './components/CoursePurchaseModal';
import ContactModal from './components/ContactModal';
import Navbar from './components/Navbar';
import PaidCoursesPage from './pages/PaidCoursesPage';
import FreeCoursesPage from './pages/FreeCoursesPage';
import RecordedCoursesPage from './pages/RecordedCoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import PurchasesPage from './pages/PurchasesPage';
import StudyMaterialPage from './pages/StudyMaterialPage';
import { coursesData } from './data/courses';

function App() {
  const [purchaseModalOpen, setPurchaseModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(coursesData.paidCourses[0]);

  const handleBuyCourse = (course: typeof coursesData.paidCourses[0]) => {
    setSelectedCourse(course);
    setPurchaseModalOpen(true);
  };

  return (
    <Router>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden pt-16">
        <Routes>
          <Route
            path="/"
            element={
              <LandingPage
                onLogin={() => {}}
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
          {/* Placeholder routes */}
          <Route path="/quick-links" element={<div className="pt-20 p-8 text-center">Quick Links - Coming Soon</div>} />
          <Route path="/timetable" element={<div className="pt-20 p-8 text-center">Live / Timetable - Coming Soon</div>} />
          <Route path="/test-series" element={<div className="pt-20 p-8 text-center">Test Series - Coming Soon</div>} />
          <Route path="/terms" element={<div className="pt-20 p-8 text-center">Terms & Conditions - Coming Soon</div>} />
          <Route path="/privacy-policy" element={<div className="pt-20 p-8 text-center">Privacy Policy - Coming Soon</div>} />
          <Route path="/refund-policy" element={<div className="pt-20 p-8 text-center">Refund Policy - Coming Soon</div>} />
        </Routes>

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