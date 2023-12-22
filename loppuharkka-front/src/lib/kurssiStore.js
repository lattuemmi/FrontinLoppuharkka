function createCourses(){
    let courseList = [
    {"id":0,"name":"versionhallinta"},
    {"id":1,"name":"java"},
    {"id":2,"name":"ruotsi"},
    {"id":3,"name":"ohjelmointi 1"}
    ];

    return {
        populate: (kurssit) => set(kurssit)
    };
}

export const kurssit = createCourses();