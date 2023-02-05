// Sukurti svetainę, kurioje sąrašas GitHub vartotojų. Vartotojus atvaizduoti atskirose
//kortelėse: login, url ir type . Naudoti React komponentą sąrašui ir komponentą kiekvienai
//kortelei. Paspaudus ant kortelės, kortelėje parodomas vartotojo id.

// Naudoti: useEffect, useState, axios.

// API: https://api.github.com/users

import { useState } from "react";

export const RenderUserCard = ({ user }: any) => {
  const [isIdVisible, setIdVisible] = useState(false);

  const visibilityHandler = () => {
    setIdVisible((prevIsIdVisible) => !prevIsIdVisible);
  };

  return (
    <>
      <div className="user-container" onClick={visibilityHandler}>
        {isIdVisible ? (
          <h3>{user.id}</h3>
        ) : (
          <div>
            <h3>{user.login}</h3>
            <p>
              Visit users by clicking <a href={user.url}>Here</a>
            </p>
            <p>Type: {user.type}</p>{" "}
          </div>
        )}{" "}
      </div>
    </>
  );
};
