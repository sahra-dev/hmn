import { useState, useEffect } from "react";

const LoveTime = () => {
    const startDate = new Date(2024, 7, 26, 18, 0, 0); // 5 شهریور 1402 - ساعت 6 عصر
    const [timeElapsed, setTimeElapsed] = useState(calculateTimeElapsed());
  
    function calculateTimeElapsed() {
      const now = new Date();
      const diff = now - startDate;
  
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      return { years, months, days, hours, minutes, seconds };
    }
  
    useEffect(() => {
      const interval = setInterval(() => {
        setTimeElapsed(calculateTimeElapsed());
      }, 1000);
      return () => clearInterval(interval);
    }, []);

    console.log(timeElapsed);
    
  
        return (
            <div style={styles.container} >
              <div style={styles.timer}>
                <span>{timeElapsed.years} Years</span> :
                <span>{timeElapsed.months} Months</span> :
                <span>{timeElapsed.days} Days</span> 
                <div ></div>
                <span>{String(timeElapsed.hours).padStart(2, "0")}</span> :
                <span>{String(timeElapsed.minutes).padStart(2, "0")}</span> :
                <span>{String(timeElapsed.seconds).padStart(2, "0")}</span></div>

                <div style={styles.afterTimer}>
                  Hameye donya mitoonest yejoor dige bashe,
                  Vali in rahi ke kenare ham oomadim qashang tarin etefaqe momken bood.
</div>

              
            </div>
          );
}
 
export default LoveTime;

const styles = {
    container: {
        zIndex: "1000" ,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      color: "#c7aee5",
      textAlign: "center",
      padding: "20px",
    },
    text: {
      fontSize: "0px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    timer: {
      fontSize: "18px",
      fontWeight: "bold",
      backgroundColor: "#c7aee5",
      color: "#ffffff",
      padding: "15px 20px",
      borderRadius: "10px",
      display: "inline-block",
      fontFamily: "'Digital-7', sans-serif",
      letterSpacing: "1px",
      textShadow: "0 0 10px #ffffff, 0 0 20px #ffffff",
    },
    afterTimer: {
      fontSize: "15px",
      fontWeight: "bold",
      backgroundColor: "#c7aee5",
      color: "#ffffff",
      padding: "15px 20px",
      borderRadius: "10px",
      display: "inline-block",
      fontFamily: "'Digital-7', sans-serif",
      letterSpacing: "1px",
      marginTop:"20px" ,
      textShadow: "0 0 50px #ffffff, 0 0 50px #ffffff",

    }
  };
  