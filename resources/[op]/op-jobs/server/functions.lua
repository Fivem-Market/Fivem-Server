opJobCore.Functions = {}

opJobCore.Functions.HasPermission = function(targetJobId, jobID, jobGrade, permission)
    return CheckJobPermission(targetJobId, jobID, jobGrade, permission)
end
