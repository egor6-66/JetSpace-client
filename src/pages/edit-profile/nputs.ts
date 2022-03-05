export const userParams = [
    {name: 'имя', obj: 'name'},
    {name: 'фамилия', obj: 'lastName'},
];

export const socialNetworksInputs = [
    {obj: 'instagram'},
    {obj: 'facebook'},
    {obj: 'twitter'},
    {obj: 'spotify'},
    {obj: 'telegram'},
    {obj: 'github'},
    {obj: 'soundCloud'},
    {obj: 'youTube'},
];

export const allObjs = {
    ...userParams.map(i => i.obj),
    ...socialNetworksInputs.map(i => i.obj),
}
