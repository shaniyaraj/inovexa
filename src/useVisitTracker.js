import { useEffect } from "react";
import axios from "axios";

function useVisitTracker() {
  useEffect(() => {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = crypto.randomUUID();
      localStorage.setItem("userId", userId);
    }

    axios
      .post("http://localhost:5000/api/track-visit", { userId })
      .then((response) => {
        const data = response.data;
        console.log("User visits count:", data.visits);
        console.log("Total unique users:", data.totalUsers);
      })
      .catch((error) => {
        console.error("Visit tracking failed:", error);
      });
  }, []);
}

export default useVisitTracker;
