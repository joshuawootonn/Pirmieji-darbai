const privacyButton = document.querySelector("#privacy-policy-submit-button");
const localStorageButton = document.querySelector(
  "#locale-storage-submit-button"
);

privacyButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString(); //rodo dabartine data ir laika (reik dar log'int)

  const AGREED_PRIVACY_POLICY_VERSION = `AGREED_PRIVACY_POLICY_VERSION`; //cia yra key
  const versionString = `version: ${todayDate}`; //mes reiksmes nekeisim, todel const

  document.cookie = `${AGREED_PRIVACY_POLICY_VERSION}=${versionString}`;
});

//localStorage.setItem("time", new Date())

privacyButton.addEventListener("click", () => {
  const todayDate = new Date().toLocaleString(); //rodo dabartine data ir laika (reik dar log'int)

  const AGREED_PRIVACY_POLICY_VERSION = `AGREED_PRIVACY_POLICY_VERSION`; //cia yra musu key
  const versionString = `version: ${todayDate}`; //mes reiksmes nekeisim, todel const

  localStorage.setItem(AGREED_PRIVACY_POLICY_VERSION, versionString);
});
