RegisterNetEvent("admin:jobs:setjob", function(jobID, gradeId)
    if not opAdmin.Functions.IsPlayerStaff(source) then
        return
    end

    local Player = QBCore.Functions.GetPlayer(source)
    Player.Functions.SetJob(jobID, gradeId)
end)
