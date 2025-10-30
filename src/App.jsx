import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./page/HomePage"));
const ViewPostPage = lazy(() => import("./page/ViewPostPage"));
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:postId" element={<ViewPostPage />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster
        toastOptions={{
          unstyled: true,
        }}
      />
    </div>
  );
}

export default App;