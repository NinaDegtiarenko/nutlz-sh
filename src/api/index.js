import { bars, contacts, omegaInfo, about, aboutText } from './dummy-data';

export const fetchBarsApi = async () => {
	return new Promise(resolve => {
		resolve(bars);
	});
};
export const fetchContactsApi = async () => {
	return new Promise(resolve => {
		resolve(contacts);
	});
};
export const fetchOmegaApi = async () => {
	return new Promise(resolve => {
		resolve(omegaInfo);
	});
};

export const fetchGlobalData = async () => {
	return new Promise(resolve => {
		resolve(about, aboutText);
	});
};
