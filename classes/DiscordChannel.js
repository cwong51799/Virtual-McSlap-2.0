class DiscordChannel{
    // Scheduling channel ID should by default be the first channel a command is used.
    // Before this, a channel is not fully setup and should not have access to primary functions.
    // The time zone is defautlted to EST.
    constructor(serverID, managerRoleID, team){
        this.serverID = serverID
        this.schedulingChannelID = null
        this.timeZone = null
        this.schedulerRoleID = schedulerRoleID
        this.team = team
    }
    // TODO
    static changeChannel(serverid, newChannelID, db){

    }
    static changeTimezone(serverid, newTimeZone, db){
        db.collection('servers').doc(serverid).update({
            timeZone : newTimeZone
        })
    }
    static changeManagerRoleID(serverid, newRoleID, db){}
}

module.exports = DiscordChannel