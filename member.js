function skillsMember() {
    var member = document.getElementById('member');
    var memberSkills = document.getElementById('member-skills');
    var memberSkillsClose = document.getElementById('member-skills-close');

    memberSkillsClose.addEventListener('click', function() {
        memberSkills.style.display = 'none';
        member.style.display = 'block';
    });
}