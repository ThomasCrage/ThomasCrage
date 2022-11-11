var map = {
    title: "Through the Block",
    song: "env2",
    maker: "David Ye",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([-18.73993, 5.60007, -86.50993], [0, 0, 0], [2, 0.36, 10], "03fc35", 0, 0, 0.6, false, true);
        a.p([-18.73986, 7.55014, -86.50986], [0, 0, 0], [2, 0.36, 10], "03fcf8", 0, 0, 0.6, false, true);
        a.p([-18.73979, 9.39021, -86.50979], [0, 0, 0], [2, 0.36, 10], "b603fc", 0, 0, 0.6, false, true);
        a.p([-18.73972, 3.66028, -86.50972], [0, 0, 0], [2, 0.36, 10], "fafc03", 0, 0, 0.6, false, true);
        a.p([-18.73965, -0.01965, -86.50965], [0, 0, 0], [2, 0.36, 10], "fc0303", 0, 0, 0.6, false, true);
        a.p([-18.73958, 1.82042, -86.50958], [0, 0, 0], [2, 0.36, 10], "fc8803", 0, 0, 0.6, false, true);
        a.p([9.16049, 2.12049, -69.12951], [-1.57, 0, 0], [2, 0.36, 10], "0.0", 0, 0, 0.6, false, true);
        a.p([-18.74, -0.02, -86.51], [0, 0, 0], [2, 0.36, 10], "1", 0, 0, 0.6, false, true);
        a.p([0.00014, 2.48014, -28.09986], [0, 0, 0], [2, 0.36, 14], "0.0", 0, 0, 0.6, false, false);
        a.p([0.00028, 5.13028, -14.03972], [0, 0, 0], [2, 0.36, 14], "0.0", 0, 0, 0.6, false, false);
        a.p([0.00035, 2.12035, -39.85965], [0, 0, 0], [2, 0.36, 14], "0.0", 0, 0, 0.6, false, false);
        a.p([0.88042, 2.12042, -48.17958], [-0.52, 0, 0], [2, 0.36, 4], "0.0", 0, 0, 0.6, false, false);
        a.p([3.24049, 2.15049, -50.34951], [-1.12, 0, 0], [2, 0.36, 4], "0.0", 0, 0, 0.6, false, false);
        a.p([9.57, 2.12, -51.13], [-1.57, 0, 0], [2, 0.36, 10], "0.0", 0, 0, 0.6, false, false);
        a.p([18.88007, 2.15007, -60.09993], [0, 0, 0], [14, 0.36, 20], "0.0", 0, 0, 0.6, false, false);
        a.p([-9.74986, -2.87986, -72.99986], [0, 0, 0], [20, 0.36, 10], "0.0", 0, 0, 0.6, false, false);
        a.p([-18.73979, -2.87979, -81.42979], [0, 0, 0], [2, 0.36, 10], "0.0", 0, 0, 0.6, false, false);
        a.p([-17.64972, 8.16028, -110.43972], [0, 0, -1.57], [10, 0.36, 10], "0.0", 0, 0, 0.6, false, false);
        a.p([-7.66965, 2.12035, -155.85965], [0, 0, 0], [20.1, 0.52, 28.72], "0.0", 0, 0, 0.6, false, false);
        a.c([16.47042, 2.45042, -51.78958], "2.0");
        a.c([16.47049, 2.45049, -68.44951], "2.0");
        a.p([-18.74, 8.16, -99.54], [0, 0, 0], [2, 0.36, 10], "0.0", 0, 0, 0.6, false, false);
        a.p([-17.64993, 8.16007, -144.22993], [0, 0, -1.57], [10, 0.36, 10], "0.0", 0, 0, 0.6, false, true);
        a.p([-19.78986, 8.16014, -118.07986], [0, 0, -1.57], [10, 0.36, 10], "0.0", 0, 0, 0.6, false, false);
        a.p([-17.64979, 8.16021, -127.07979], [0, 0, -1.57], [10, 0.36, 10], "0.0", 0, 0, 0.6, false, false);
        a.p([-19.78972, 8.16028, -135.14972], [0, 0, -1.57], [10, 0.36, 10], "0.0", 0, 0, 0.6, false, false);
        a.c([-12.31951, -2.71951, -70.39951], "2.0");
        a.p([0, 1.18, -1.5], [0, 0.62, 0], [2, 0.36, 14], "0.0", 0, 0, 0.6, false, false);
        a.p([5.29007, -2.87993, -69.06993], [-1.57, 0, 0], [2, 0.36, 10], "0.0", 0, 0, 0.6, false, false);
        a.e([-15.99986, 3.29014, -167.04986]);
        a.e([-14.49979, 3.29021, -167.04979]);
        a.e([-12.99972, 3.29028, -167.04972]);
        a.e([-11.49965, 3.29035, -167.04965]);
        a.e([-5.49958, 3.29042, -167.04958]);
        a.e([-9.99951, 3.29049, -167.04951]);
        a.e([-8.5, 3.29, -167.05]);
        a.e([-6.99993, 3.29007, -167.04993]);
        a.e([-3.99986, 3.29014, -167.04986]);
    },
    post: function() {
        a.u('P8');
        cc.set_monkey("speed", 0.2);
        cc.set_monkey("steer", 0.03);
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -16.39979) {
                    this.section_id += 1
                }
                break;
            case 1:
                a.rot('P8', 'x', 0.5);
                if (PZ < -30.39979) {
                    this.section_id += 1
                }
                break;
            case 2:
                if (PZ < -61.33958) {
                    speed = default_speed * 0.9;
                    this.section_id += 1
                }
                break;
            case 3:
                if (PZ < -75.33958) {
                    speed = cc.get("speed", null);
                    this.section_id += 1
                }
                break;
            case 4:
                if (PZ < -84.96993) {
                    a.g(null, -3.0, null);
                    this.section_id += 1
                }
                break;
            case 5:
                if (PZ < -87.16993) {
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
            case 6:
                if (PZ < -101.79965) {
                    speed = default_speed * 0.9;
                    a.g(null, 0.1, null);
                    this.section_id += 1
                }
                break;
            case 7:
                if (PZ < -152.47965) {
                    speed = cc.get("speed", null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [-18.73993, 5.60007, -86.50993], [0, 0, 0], [2, 0.36, 10]);
        a.re('P1', [-18.73986, 7.55014, -86.50986], [0, 0, 0], [2, 0.36, 10]);
        a.re('P2', [-18.73979, 9.39021, -86.50979], [0, 0, 0], [2, 0.36, 10]);
        a.re('P3', [-18.73972, 3.66028, -86.50972], [0, 0, 0], [2, 0.36, 10]);
        a.re('P4', [-18.73965, -0.01965, -86.50965], [0, 0, 0], [2, 0.36, 10]);
        a.re('P5', [-18.73958, 1.82042, -86.50958], [0, 0, 0], [2, 0.36, 10]);
        a.re('P6', [9.16049, 2.12049, -69.12951], [-1.57, 0, 0], [2, 0.36, 10]);
        a.re('P7', [-18.74, -0.02, -86.51], [0, 0, 0], [2, 0.36, 10]);
        a.re('P8', [0.00014, 2.48014, -28.09986], [0, 0, 0], [2, 0.36, 14]);
        a.re('P9', [0.00028, 5.13028, -14.03972], [0, 0, 0], [2, 0.36, 14]);
        a.re('P10', [0.00035, 2.12035, -39.85965], [0, 0, 0], [2, 0.36, 14]);
        a.re('P11', [0.88042, 2.12042, -48.17958], [-0.52, 0, 0], [2, 0.36, 4]);
        a.re('P12', [3.24049, 2.15049, -50.34951], [-1.12, 0, 0], [2, 0.36, 4]);
        a.re('P13', [9.57, 2.12, -51.13], [-1.57, 0, 0], [2, 0.36, 10]);
        a.re('P14', [18.88007, 2.15007, -60.09993], [0, 0, 0], [14, 0.36, 20]);
        a.re('P15', [-9.74986, -2.87986, -72.99986], [0, 0, 0], [20, 0.36, 10]);
        a.re('P16', [-18.73979, -2.87979, -81.42979], [0, 0, 0], [2, 0.36, 10]);
        a.re('P17', [-17.64972, 8.16028, -110.43972], [0, 0, -1.57], [10, 0.36, 10]);
        a.re('P18', [-7.66965, 2.12035, -155.85965], [0, 0, 0], [20.1, 0.52, 28.72]);
        a.re('C0', [16.47042, 2.45042, -51.78958], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [16.47049, 2.45049, -68.44951], [0, 0, 0], [2, 2, 2]);
        a.re('P19', [-18.74, 8.16, -99.54], [0, 0, 0], [2, 0.36, 10]);
        a.re('P20', [-17.64993, 8.16007, -144.22993], [0, 0, -1.57], [10, 0.36, 10]);
        a.re('P21', [-19.78986, 8.16014, -118.07986], [0, 0, -1.57], [10, 0.36, 10]);
        a.re('P22', [-17.64979, 8.16021, -127.07979], [0, 0, -1.57], [10, 0.36, 10]);
        a.re('P23', [-19.78972, 8.16028, -135.14972], [0, 0, -1.57], [10, 0.36, 10]);
        a.re('C2', [-12.31951, -2.71951, -70.39951], [0, 0, 0], [2, 2, 2]);
        a.re('P24', [0, 1.18, -1.5], [0, 0.62, 0], [2, 0.36, 14]);
        a.re('P25', [5.29007, -2.87993, -69.06993], [-1.57, 0, 0], [2, 0.36, 10]);
        a.re('E0', [-15.99986, 3.29014, -167.04986], [0, 0, 0], [1, 1, 1]);
        a.re('E1', [-14.49979, 3.29021, -167.04979], [0, 0, 0], [1, 1, 1]);
        a.re('E2', [-12.99972, 3.29028, -167.04972], [0, 0, 0], [1, 1, 1]);
        a.re('E3', [-11.49965, 3.29035, -167.04965], [0, 0, 0], [1, 1, 1]);
        a.re('E4', [-5.49958, 3.29042, -167.04958], [0, 0, 0], [1, 1, 1]);
        a.re('E5', [-9.99951, 3.29049, -167.04951], [0, 0, 0], [1, 1, 1]);
        a.re('E6', [-8.5, 3.29, -167.05], [0, 0, 0], [1, 1, 1]);
        a.re('E7', [-6.99993, 3.29007, -167.04993], [0, 0, 0], [1, 1, 1]);
        a.re('E8', [-3.99986, 3.29014, -167.04986], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
