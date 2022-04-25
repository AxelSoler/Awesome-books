import { DateTime } from "./luxon.js";

const time = () => {
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
const date = document.getElementById('date');
date.innerHTML = now;
};

export default time;