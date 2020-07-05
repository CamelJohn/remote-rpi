import axios from 'axios';

const baseURL = `localhost:8080/rpi/APIv1/`

export const sendChannel = channel => {
  axios.post(`${baseURL}set/tv/stream`, {
    args: channel
  })
};

export const setVol = (vol, direction) => {
  axios.post(`${baseURL}/set/volume/${direction}/exec`, {
    args: vol
  })
};

export const power = pwr => {
  let status = pwr ? 'on' : 'off';
  axios.post(`${baseURL}set/tv/${status}/exec`);
}

export const setHDMI = ch => {
  axios.post(`${baseURL}/set/hdmi/to/exec`, { args: ch })
}