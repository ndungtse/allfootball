import { footHeaders, getApi } from './apiCallMethods';

export const getLeagues = async (_opts?: object) => {
    const options = {..._opts, headers: footHeaders}
    const data = await getApi('leagues', options);
    return data
}

export const getFixtures = async (_opts?: object) => {
    const options = {..._opts, headers: footHeaders}
    const data = await getApi('fixtures', options);
    return data
}

export const getStandings = async (_opts?: object) => {
    const options = {..._opts, headers: footHeaders}
    const data = await getApi('standings', options);
    return data
}

export const getPlayers = async (_opts?: object) => {
    const options = {..._opts, headers: footHeaders}
    const data = await getApi('players', options);
    return data
}

export const getTeams = async (_opts?: object) => {
    const options = {..._opts, headers: footHeaders}
    const data = await getApi('teams', options);
    return data
}