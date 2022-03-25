 function getUser(){ return (new Promise((resolve, reject,id)=> {

    setTimeout(() => {
        console.log('User is founded');
        let user = {id: id,gitHubUsername : 'username'};
        resolve(user);
    }, 2000);
}))}

function getRepositories() {
    return(new Promise((resolve, reject,username, level)=> {
    setTimeout(() => {
        console.log('repos is ready');
        let repos = ['br1','main','master'];
        resolve(repos,level);
    }, 2000);
}))}

function getBrunch() {
    return( new Promise((resolve, reject,repo)=> {
    setTimeout(() => {
        console.log('repo[] is ready');
        resolve(repo);
    }, 2000);
}))}

function postCommit() {
    return ( new Promise((resolve, reject,vers, commited)=> {
    if(commited)
        setTimeout(() => {
        console.log('new Version');
        resolve(vers == 'new Version');
    }, 2000)
    else
    reject("The new version is not commited");}))
}



getUser(1).then(user => {
    getRepositories(user.gitHubUsername, 2).then
   ((repos, levelNumber)=> getBrunch(repos[levelNumber]).then(brunch =>{
        if(brunch=="master")
        postCommit("new version").then(commited => {
            if(commited)
            console.log("The new version is commited")
            else console.log("The new version is not commited")
        })
    }))
})