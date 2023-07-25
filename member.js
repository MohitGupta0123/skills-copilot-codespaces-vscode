function skillsMember(){
    return{
        restrict : 'E',
        templateUrl : 'modules/skills/views/members.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope:{
            member: '='
        }
    };
}