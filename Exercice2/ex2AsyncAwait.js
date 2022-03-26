
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
async function exercice(){
    try{
        let user= await getUser(1)
        let levelNumber=2
            let repos = await getRepositories(user.gitHubUsername,2)
    
        console.log(repos[2])
        let brunch = await getBrunch(repos[levelNumber])
        //console.log(brunch)
        
        if(brunch=="master"){
        let commited= await postCommit("new version")
        console.log(commited)
        if(commited)
            console.log("The new version is commited")
            else console.log("The new version is not commited")
        }
    }catch{(err => console.log(err))}
    
}
exercice()