var map = {
    title: "First Person",
    song: "env2",
    maker: "uPilot",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([6.14028, 0.00028, -364.87972], [0, 0, 0], [20786.6, 2935.56, 2], "052f5c", 0, 0, 0.6, false, false);
        a.y([-71.44958, 3.69042, -162.62958], [0.09, 0.1, 0.14], [53.18, 1.42, 53.18], "025905,0.947", 0, 0, 0.6, false, 1);
        a.y([1.77049, 3.69049, -503.40951], [0.09, 0.1, 0.14], [130.2, 3.48, 130.2], "025905,0.947", 0, 0, 0.6, false, 1);
        a.s([51.16, 0, -132.28], 38.46, "396799,0.2", 0, 0, 0.6, false);
        a.s([-39.90993, 0.00007, -288.22993], 38.46, "396799,0.2", 0, 0, 0.6, false);
        a.s([-71.44986, 3.69014, -162.62986], 37.8, "3ba33e,0.6", 0, 0, 0.6, false);
        a.s([1.77021, 3.69021, -503.40979], 92.6, "3ba33e,0.6", 0, 0, 0.6, false);
        a.y([-71.44972, 3.69028, -162.62972], [0.09, 0.1, 0.14], [88.62, 1.18, 88.62], "40b844,0.6", 0, 0, 0.6, false, 1);
        a.y([1.77035, 3.69035, -503.40965], [0.09, 0.1, 0.14], [217.02, 2.9, 217.02], "40b844,0.6", 0, 0, 0.6, false, 1);
        a.s([71.84042, 3.69042, -269.11958], 37.8, "5ba5f5,0.7", 0, 0, 0.6, false);
        a.y([71.84049, 3.69049, -269.11951], [0.09, 0.13, -0.15], [53.18, 1.42, 53.18], "5ba5f5", 0, 0, 0.6, false, 1);
        a.p([0, 0, -79.08], [0.01, 0.36, -0.03], [2, 6.3, 18.16], "a2e8c1,0.2", 0, 0, 0.6, false, false);
        a.p([0.00007, 3.07007, -95.44993], [0, 0.01, -0.03], [2, 6.3, 18.16], "a2e8c1,0.2", 0, 0, 0.6, false, false);
        a.p([-1.15986, 3.07014, -113.18986], [0.12, 0.01, -0.03], [2, 6.3, 18.16], "a2e8c1,0.2", 0, 0, 0.6, false, false);
        a.p([2.34021, 3.07021, -145.67979], [-0.33, 0.01, -0.03], [2, 6.3, 18.16], "a2e8c1,0.2", 0, 0, 0.6, false, false);
        a.p([3.08028, 3.07028, -161.94972], [0.22, 0.01, -0.03], [2, 6.3, 18.16], "a2e8c1,0.2", 0, 0, 0.6, false, false);
        a.p([-1.15965, 3.07035, -129.85965], [-0.12, 0.01, -0.03], [2, 6.3, 18.16], "a2e8c1,0.2", 0, 0, 0.6, false, false);
        a.p([1.20042, 26.67042, -215.61958], [0, 0.01, -0.03], [12.48, 2.82, 18.16], "a2e8c1,0.2", 0, 0, 0.6, false, false);
        a.p([1.20049, 3.07049, -179.49951], [0, 0.01, -0.03], [2, 6.3, 18.16], "a2e8c1,0.2", 0, 0, 0.6, true, false);
        a.p([1.2, 9.57, -250.44], [0, 0.01, -0.03], [12.48, 2.82, 18.16], "a2e8c1,0.2", 0, 0, 0.6, false, false);
        a.p([0.00007, 10.11007, -296.68993], [0, 0, 0], [4.42, 2, 74.4], "d6111e,0.1", 0, 0, 0.6, false, false);
        a.c([-0.96986, 6.160139999999999, -89.45986], 0.0);
        a.c([-1.26979, 0.46021, -44.62979], 0.0);
        a.p([0.00028, -1.02972, -35.07972], [0, 0, 0], [7.58, 2, 76.52], "a2e8c1,0.2", 0, 0, 0.6, false, false);
        a.c([-1.54965, 11.590349999999999, -266.50965], 0.0);
        a.c([1.11042, 11.59042, -268.49958], 0.0);
        a.c([1.32049, 11.590489999999999, -263.99951], 0.0);
        a.c([-1.75, 11.59, -272.29], 0.0);
        a.c([0.19007, 11.590069999999999, -274.53993], 0.0);
        a.c([1.73014, 11.59014, -277.30986], 0.0);
        a.c([0.09021, 11.590209999999999, -279.65979], 0.0);
        a.c([-1.95972, 11.59028, -281.80972], 0.0);
        a.c([-0.00965, 11.590349999999999, -283.85965], 0.0);
        a.c([1.73042, 11.59042, -285.59958], 0.0);
        a.c([0.29049, 11.590489999999999, -287.54951], 0.0);
        a.c([0.19, 11.59, -292.97], 0.0);
        a.c([-1.13993, 11.590069999999999, -296.13993], 0.0);
        a.c([0.91014, 11.59014, -299.72986], 0.0);
        a.c([-1.23979, 11.590209999999999, -302.38979], 0.0);
        a.c([-0.35972, 11.59028, -269.40972], 0.0);
        a.c([-0.52965, 11.590349999999999, -276.82965], 0.0);
        a.c([-0.77958, 11.59042, -285.61958], 0.0);
        a.c([-0.94951, 11.590489999999999, -290.38951], 0.0);
        a.c([-1.12, 11.59, -298.84], 0.0);
        a.c([1.78007, 11.590069999999999, -296.01993], 0.0);
        a.c([1.69014, 11.59014, -303.61986], 0.0);
        a.c([-0.62979, 11.590209999999999, -306.27979], 0.0);
        a.c([1.35028, 11.59028, -308.00972], 0.0);
        a.c([-1.75965, 11.590349999999999, -311.56965], 0.0);
        a.c([1.84042, 11.59042, -312.44958], 0.0);
        a.c([-0.82951, 11.590489999999999, -316.34951], 0.0);
        a.c([0.21, 11.59, -314.03], 0.0);
        a.c([2.49007, 11.590069999999999, -291.00993], 0.0);
        a.c([-2.31986, 11.59014, -318.74986], 0.0);
        a.c([1.27021, 11.590209999999999, -320.28979], 0.0);
        a.c([-1.08972, 11.59028, -325.70972], 0.0);
        a.c([-1.08965, 11.590349999999999, -321.70965], 0.0);
        a.c([1.57042, 11.59042, -317.10958], 0.0);
        a.c([1.57049, 11.590489999999999, -325.59951], 0.0);
        a.c([0.65, 11.59, -323.04], 0.0);
        a.c([1.47007, 11.590069999999999, -328.05993], 0.0);
        a.y([71.84035, 3.69035, -269.11965], [0.09, 0.13, -0.15], [88.62, 1.18, 88.62], "0.0", 0, 0, 0.6, false, 1);
        a.e([0.32042, 11.82042, -331.11958]);
    },
    post: function() {
        a.u('P0');
        cc.set_monkey("scene.clearColor", new BABYLON.Color3.FromHexString("#052f5c"));
        cc.set_monkey("radius", 1.0);
        cc.set_monkey("speed", default_speed * 2.63);
        cc.set_monkey("steer", default_steer * 0.65);
        cc.set_monkey("camera.maxZ", 999999.0);
        cc.set_monkey("player.scaling", new BABYLON.Vector3(0.0, 0.0, 0.0));
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -70.61985999999999) {
                    a.cam_cd(-15.0);
                    a.cam_d(1.3);
                    this.section_id += 1
                }
                break;
            case 1:
                if (PZ < -88.75986) {
                    a.cam_cd(null);
                    a.cam_d(null);
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -89.52978999999999) {
                    speed = default_speed * 0.7;
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -167.76979) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -169.61965) {
                    a.jh(2.3);
                    a.js(0.0);
                    speed = default_speed * 0.8;
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -211.07965) {
                    a.jh(null);
                    a.js(null);
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -212.26971999999998) {
                    speed = default_speed * 0.7;
                    a.g(null, 0.2, null);
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -255.36972) {
                    speed = cc.get("speed", null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 8:
                if (PZ < -256.56986) {
                    speed = default_speed * 0.5;
                    this.section_id += 1
                }
                break;
            case 9:
                a.mov('P0', 'y', 200.0);
                if (PZ < -342.58986) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [6.14028, 0.00028, -364.87972], [0, 0, 0], [20786.6, 2935.56, 2]);
        a.re('Y0', [-71.44958, 3.69042, -162.62958], [0.09, 0.1, 0.14], [53.18, 1.42, 53.18]);
        a.re('Y1', [1.77049, 3.69049, -503.40951], [0.09, 0.1, 0.14], [130.2, 3.48, 130.2]);
        a.re('S0', [51.16, 0, -132.28], [0, 0, 0], [38.46, 38.46, 38.46]);
        a.re('S1', [-39.90993, 0.00007, -288.22993], [0, 0, 0], [38.46, 38.46, 38.46]);
        a.re('S2', [-71.44986, 3.69014, -162.62986], [0, 0, 0], [37.8, 37.8, 37.8]);
        a.re('S3', [1.77021, 3.69021, -503.40979], [0, 0, 0], [92.6, 92.6, 92.6]);
        a.re('Y2', [-71.44972, 3.69028, -162.62972], [0.09, 0.1, 0.14], [88.62, 1.18, 88.62]);
        a.re('Y3', [1.77035, 3.69035, -503.40965], [0.09, 0.1, 0.14], [217.02, 2.9, 217.02]);
        a.re('S4', [71.84042, 3.69042, -269.11958], [0, 0, 0], [37.8, 37.8, 37.8]);
        a.re('Y4', [71.84049, 3.69049, -269.11951], [0.09, 0.13, -0.15], [53.18, 1.42, 53.18]);
        a.re('P1', [0, 0, -79.08], [0.01, 0.36, -0.03], [2, 6.3, 18.16]);
        a.re('P2', [0.00007, 3.07007, -95.44993], [0, 0.01, -0.03], [2, 6.3, 18.16]);
        a.re('P3', [-1.15986, 3.07014, -113.18986], [0.12, 0.01, -0.03], [2, 6.3, 18.16]);
        a.re('P4', [2.34021, 3.07021, -145.67979], [-0.33, 0.01, -0.03], [2, 6.3, 18.16]);
        a.re('P5', [3.08028, 3.07028, -161.94972], [0.22, 0.01, -0.03], [2, 6.3, 18.16]);
        a.re('P6', [-1.15965, 3.07035, -129.85965], [-0.12, 0.01, -0.03], [2, 6.3, 18.16]);
        a.re('P7', [1.20042, 26.67042, -215.61958], [0, 0.01, -0.03], [12.48, 2.82, 18.16]);
        a.re('P8', [1.20049, 3.07049, -179.49951], [0, 0.01, -0.03], [2, 6.3, 18.16]);
        a.re('P9', [1.2, 9.57, -250.44], [0, 0.01, -0.03], [12.48, 2.82, 18.16]);
        a.re('P10', [0.00007, 10.11007, -296.68993], [0, 0, 0], [4.42, 2, 74.4]);
        a.re('C0', [-0.96986, 6.160139999999999, -89.45986], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-1.26979, 0.46021, -44.62979], [0, 0, 0], [2, 2, 2]);
        a.re('P11', [0.00028, -1.02972, -35.07972], [0, 0, 0], [7.58, 2, 76.52]);
        a.re('C2', [-1.54965, 11.590349999999999, -266.50965], [0, 0, 0], [2, 2, 2]);
        a.re('C3', [1.11042, 11.59042, -268.49958], [0, 0, 0], [2, 2, 2]);
        a.re('C4', [1.32049, 11.590489999999999, -263.99951], [0, 0, 0], [2, 2, 2]);
        a.re('C5', [-1.75, 11.59, -272.29], [0, 0, 0], [2, 2, 2]);
        a.re('C6', [0.19007, 11.590069999999999, -274.53993], [0, 0, 0], [2, 2, 2]);
        a.re('C7', [1.73014, 11.59014, -277.30986], [0, 0, 0], [2, 2, 2]);
        a.re('C8', [0.09021, 11.590209999999999, -279.65979], [0, 0, 0], [2, 2, 2]);
        a.re('C9', [-1.95972, 11.59028, -281.80972], [0, 0, 0], [2, 2, 2]);
        a.re('C10', [-0.00965, 11.590349999999999, -283.85965], [0, 0, 0], [2, 2, 2]);
        a.re('C11', [1.73042, 11.59042, -285.59958], [0, 0, 0], [2, 2, 2]);
        a.re('C12', [0.29049, 11.590489999999999, -287.54951], [0, 0, 0], [2, 2, 2]);
        a.re('C13', [0.19, 11.59, -292.97], [0, 0, 0], [2, 2, 2]);
        a.re('C14', [-1.13993, 11.590069999999999, -296.13993], [0, 0, 0], [2, 2, 2]);
        a.re('C15', [0.91014, 11.59014, -299.72986], [0, 0, 0], [2, 2, 2]);
        a.re('C16', [-1.23979, 11.590209999999999, -302.38979], [0, 0, 0], [2, 2, 2]);
        a.re('C17', [-0.35972, 11.59028, -269.40972], [0, 0, 0], [2, 2, 2]);
        a.re('C18', [-0.52965, 11.590349999999999, -276.82965], [0, 0, 0], [2, 2, 2]);
        a.re('C19', [-0.77958, 11.59042, -285.61958], [0, 0, 0], [2, 2, 2]);
        a.re('C20', [-0.94951, 11.590489999999999, -290.38951], [0, 0, 0], [2, 2, 2]);
        a.re('C21', [-1.12, 11.59, -298.84], [0, 0, 0], [2, 2, 2]);
        a.re('C22', [1.78007, 11.590069999999999, -296.01993], [0, 0, 0], [2, 2, 2]);
        a.re('C23', [1.69014, 11.59014, -303.61986], [0, 0, 0], [2, 2, 2]);
        a.re('C24', [-0.62979, 11.590209999999999, -306.27979], [0, 0, 0], [2, 2, 2]);
        a.re('C25', [1.35028, 11.59028, -308.00972], [0, 0, 0], [2, 2, 2]);
        a.re('C26', [-1.75965, 11.590349999999999, -311.56965], [0, 0, 0], [2, 2, 2]);
        a.re('C27', [1.84042, 11.59042, -312.44958], [0, 0, 0], [2, 2, 2]);
        a.re('C28', [-0.82951, 11.590489999999999, -316.34951], [0, 0, 0], [2, 2, 2]);
        a.re('C29', [0.21, 11.59, -314.03], [0, 0, 0], [2, 2, 2]);
        a.re('C30', [2.49007, 11.590069999999999, -291.00993], [0, 0, 0], [2, 2, 2]);
        a.re('C31', [-2.31986, 11.59014, -318.74986], [0, 0, 0], [2, 2, 2]);
        a.re('C32', [1.27021, 11.590209999999999, -320.28979], [0, 0, 0], [2, 2, 2]);
        a.re('C33', [-1.08972, 11.59028, -325.70972], [0, 0, 0], [2, 2, 2]);
        a.re('C34', [-1.08965, 11.590349999999999, -321.70965], [0, 0, 0], [2, 2, 2]);
        a.re('C35', [1.57042, 11.59042, -317.10958], [0, 0, 0], [2, 2, 2]);
        a.re('C36', [1.57049, 11.590489999999999, -325.59951], [0, 0, 0], [2, 2, 2]);
        a.re('C37', [0.65, 11.59, -323.04], [0, 0, 0], [2, 2, 2]);
        a.re('C38', [1.47007, 11.590069999999999, -328.05993], [0, 0, 0], [2, 2, 2]);
        a.re('Y5', [71.84035, 3.69035, -269.11965], [0.09, 0.13, -0.15], [88.62, 1.18, 88.62]);
        a.re('E0', [0.32042, 11.82042, -331.11958], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
