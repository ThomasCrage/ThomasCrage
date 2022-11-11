var map = {
    title: "NASCAR",
    song: "env2",
    maker: "cfurby27",
    spawn: [0, 0.5, 0],
    init: function() {
        a.p([1159.45, 0.98007, -675.8], [1.57, 0, 0], [16.98, 56.5, 1020.88], 1, 0, 0, 0.6, false);
        a.p([-1159.56, 0.98014, -676.87], [1.57, 0, 0], [16.98, 56.5, 1020.88], 1, 0, 0, 0.6, false);
        a.p([-4.34, -0.25978999999999997, -0.54], [0, 0, 0], [0.3, 0.52, 1.54], 1, 0, 0, 0.6, false);
        a.p([-4.9, -0.9497199999999999, 0.88], [1.58, 0, 0], [0.3, 0.22, 0.34], 1, 0, 0, 0.6, false);
        a.p([5.59, -0.27965, -1.99], [1.58, 0, 0], [0.3, 0.58, 1.74], 1, 0, 0, 0.6, false);
        a.p([6.24, -0.95, 0.88], [1.58, 0, 0], [0.3, 0.22, 0.34], 1, 0, 0, 0.6, false);
        a.p([6.8, -0.25993, -0.54], [0, 0, 0], [0.3, 0.52, 1.54], 1, 0, 0, 0.6, false);
        a.p([4.88, -0.94986, 0.88], [1.58, 0, 0], [0.3, 0.22, 0.34], 1, 0, 0, 0.6, false);
        a.p([-6.26, -0.94979, 0.88], [1.58, 0, 0], [0.3, 0.22, 0.34], 1, 0, 0, 0.6, false);
        a.p([-5.55, -0.27972, -1.99], [1.58, 0, 0], [0.3, 0.58, 1.74], 1, 0, 0, 0.6, false);
        a.p([0.07, -1.53965, 72.16], [0, 0, 0], [84.24, 41.32, 77.7], -1.0, 0, 0, 0.6, false);
        a.p([5.59, -1.15, 0.8], [1.58, 0, 0], [0.3, 1.16, 2.2], 2.0, 0, 0, 0.6, false);
        a.p([-4.4, -1.14993, -1.57], [0, 0, 0], [0.3, 1.16, 2.64], 2.0, 0, 0, 0.6, false);
        a.p([-6.65, -1.14986, -1.46], [0, 0, 0], [0.3, 1.16, 2.64], 2.0, 0, 0, 0.6, false);
        a.p([-5.55, -1.14979, -4.02], [1.58, 0, 0], [0.3, 1.16, 2.2], 2.0, 0, 0, 0.6, false);
        a.p([-5.55, -0.27972, -1.87], [1.58, 0, 0], [0.3, 0.78, 2.2], 2.0, 0, 0, 0.6, false);
        a.p([6.74, -1.14965, -1.57], [0, 0, 0], [0.3, 1.16, 2.64], 2.0, 0, 0, 0.6, false);
        a.p([-4.47, -0.79, 0.14], [0, 0, 0], [0.3, 0.52, 1.54], 2.0, 0, 0, 0.6, false);
        a.p([4.49, -1.14993, -1.46], [0, 0, 0], [0.3, 1.16, 2.64], 2.0, 0, 0, 0.6, false);
        a.p([-6.63, -0.20986000000000002, -0.55], [0, 0, 0], [0.3, 0.74, 2.66], 2.0, 0, 0, 0.6, false);
        a.y([-6.7, -1.34979, -3.36], [1.58, 1.55, 0], [0.84, 0.44, 0.84], 2.0, 0, 0, 0.6);
        a.p([-4.4, -0.20972000000000002, -0.55], [0, 0, 0], [0.3, 0.74, 2.66], 2.0, 0, 0, 0.6, false);
        a.y([-4.42, -1.34965, 0.18], [1.58, 1.55, 0], [0.84, 0.44, 0.84], 2.0, 0, 0, 0.6);
        a.y([-4.42, -1.35, -3.36], [1.58, 1.55, 0], [0.84, 0.44, 0.84], 2.0, 0, 0, 0.6);
        a.p([-5.55, -1.14993, 0.8], [1.58, 0, 0], [0.3, 1.16, 2.2], 2.0, 0, 0, 0.6, false);
        a.p([-5.52, 0.17013999999999999, -0.52], [0, 0, 0], [2, 0.48, 2.48], 2.0, 0, 0, 0.6, false);
        a.p([-5.55, -0.27979, 0.78], [1.58, 0, 0], [0.3, 0.78, 2.2], 2.0, 0, 0, 0.6, false);
        a.p([-6.66, -0.8697199999999999, -3.37], [0, 0, 0], [0.3, 0.42, 1.54], 2.0, 0, 0, 0.6, false);
        a.p([-4.4, -0.86965, -3.37], [0, 0, 0], [0.3, 0.52, 1.54], 2.0, 0, 0, 0.6, false);
        a.p([4.53, -0.79, 0.14], [0, 0, 0], [0.3, 0.52, 1.54], 2.0, 0, 0, 0.6, false);
        a.p([-6.61, -0.7899299999999999, 0.14], [0, 0, 0], [0.3, 0.52, 1.54], 2.0, 0, 0, 0.6, false);
        a.p([6.74, -0.8698600000000001, -3.37], [0, 0, 0], [0.3, 0.52, 1.54], 2.0, 0, 0, 0.6, false);
        a.p([4.48, -0.86979, -3.37], [0, 0, 0], [0.3, 0.42, 1.54], 2.0, 0, 0, 0.6, false);
        a.p([5.59, -0.27972, 0.78], [1.58, 0, 0], [0.3, 0.78, 2.2], 2.0, 0, 0, 0.6, false);
        a.p([-5.52, -0.47965, -3.01], [0, 0, 0], [2, 0.48, 1.88], 2.0, 0, 0, 0.6, false);
        a.y([-6.63, -1.35, 0.18], [1.58, 1.55, 0], [0.84, 0.44, 0.84], 2.0, 0, 0, 0.6);
        a.y([4.5, -1.3499299999999999, 0.18], [1.58, 1.55, 0], [0.84, 0.44, 0.84], 2.0, 0, 0, 0.6);
        a.p([6.74, -0.20986000000000002, -0.55], [0, 0, 0], [0.3, 0.74, 2.66], 2.0, 0, 0, 0.6, false);
        a.p([5.75, -0.47979, -3.01], [0, 0, 0], [2, 0.48, 1.88], 2.0, 0, 0, 0.6, false);
        a.p([4.51, -0.20972000000000002, -0.55], [0, 0, 0], [0.3, 0.74, 2.66], 2.0, 0, 0, 0.6, false);
        a.y([4.5, -1.34965, -3.17], [1.58, 1.55, 0], [0.84, 0.44, 0.84], 2.0, 0, 0, 0.6);
        a.p([6.67, -0.79, 0.14], [0, 0, 0], [0.3, 0.52, 1.54], 2.0, 0, 0, 0.6, false);
        a.y([6.81, -1.3499299999999999, -3.17], [1.58, 1.55, 0], [0.84, 0.44, 0.84], 2.0, 0, 0, 0.6);
        a.p([5.59, -0.27986, -1.87], [1.58, 0, 0], [0.3, 0.78, 2.2], 2.0, 0, 0, 0.6, false);
        a.p([5.59, -1.14979, -4.02], [1.58, 0, 0], [0.3, 1.16, 2.2], 2.0, 0, 0, 0.6, false);
        a.p([5.63, 0.17028, -0.52], [0, 0, 0], [2, 0.48, 2.48], 2.0, 0, 0, 0.6, false);
        a.y([6.81, -1.34965, 0.06], [1.58, 1.55, 0], [0.84, 0.44, 0.84], 2.0, 0, 0, 0.6);
        a.p([8.4, -0.53, -566.79], [0, 0, 0], [11.44, 27.28, 1157.68], -1.0, 0, 0, 0.6, false);
        a.p([-0.3, -1.74993, -700.88], [1.6, 0, 0], [2, 6.78, 8.36], -1.0, 0, 0, 0.6, false);
        a.p([0, -4.34986, -466.6], [0, 0, 0], [907.18, 5.24, 945.14], 3.0, 0, 0, 0.6, false);
        a.c([1.04, -1.1897199999999999, -668.32], true);
        a.c([-2.16, -1.1896499999999999, -668.33], true);
        a.p([1.79, -1.54, -57.24], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.64, -1.53993, -57.24], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([2.13, -1.53986, -97.76], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.07, -1.5397900000000002, -77.71], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([0.64, -1.53972, -97.76], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([2.13, -1.53965, -116.18], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.74, -1.54, -116.22], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.58, -1.53993, -131.93], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-1.2, -1.53986, -131.91], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([2.05, -1.5397900000000002, -158.02], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.58, -1.53972, -158.14], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([2.05, -1.53965, -176.44], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([0.58, -1.54, -176.45], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.96, -1.53993, -176.45], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([0.54, -1.53986, -194.12], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.27, -1.5397900000000002, -194.06], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-1.43, -1.53972, -194.06], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([1.79, -1.68965, -208.23], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.85, -1.69, -208.23], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([1.79, -1.68993, -234.23], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([0.62, -1.68986, -234.23], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.89, -1.6897900000000001, -248.52], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.4, -1.68972, -248.52], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.07, -1.68965, -263.96], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([1.91, -1.69, -280.33], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.98, -1.68993, -280.07], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([1.81, -1.68986, -299.23], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([0.58, -1.6897900000000001, -299.23], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.88, -1.68972, -315.5], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-1.53, -1.68965, -315.5], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.69, -336.81], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.68993, -339.16], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.68986, -341.74], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.6897900000000001, -345.2], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.68972, -348.21], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.68965, -350.95], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.69, -352.7], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.68993, -354.45], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([1.91, -1.68986, -374.61], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.9, -1.6897900000000001, -374.61], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.68972, -394.18], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.68965, -397.88], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.69, -401.08], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.53, -1.68993, -403.85], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.8, -1.68986, -424.17], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-1.37, -1.6897900000000001, -424.17], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([2.22, -1.68972, -442.55], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([0.61, -1.68965, -442.55], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.47, -1.69, -461.88], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([2.1, -1.68993, -478.11], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.82, -1.68986, -478.11], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([2.05, -1.6897900000000001, -497.73], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([0.7, -1.68972, -497.73], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.93, -1.68965, -497.76], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([2.05, -1.69, -512.8], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.93, -1.68993, -512.84], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-1.74, -1.68986, -512.84], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([0.12, -1.6897900000000001, -591.45], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([2.23, -1.7497200000000002, -608.68], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-2.9, -1.74965, -608.68], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-0.02, -1.75, -646.36], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([1.98, -1.74993, -666.65], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-3.07, -1.74986, -666.65], [0, 0, 0], [2, 6.78, 3.72], 1, 0, 0, 0.6, false);
        a.p([-9.14, -0.52979, -566.79], [0, 0, 0], [11.44, 21.74, 1157.68], -1.0, 0, 0, 0.6, false);
        a.e([-0.05, -1.61972, -697.28]);
    },
    post: function() {
        a.u('P0');
        a.u('P1');
        a.u('P2');
        a.u('P3');
        a.u('P4');
        a.u('P5');
        a.u('P6');
        a.u('P7');
        a.u('P8');
        a.u('P9');
        a.u('P10');
        a.u('P11');
        a.u('P12');
        a.u('P13');
        a.u('P14');
        a.u('P15');
        a.u('P16');
        a.u('P17');
        a.u('P18');
        a.u('P19');
        a.u('Y0');
        a.u('P20');
        a.u('Y1');
        a.u('Y2');
        a.u('P21');
        a.u('P22');
        a.u('P23');
        a.u('P24');
        a.u('P25');
        a.u('P26');
        a.u('P27');
        a.u('P28');
        a.u('P29');
        a.u('P30');
        a.u('P31');
        a.u('Y3');
        a.u('Y4');
        a.u('P32');
        a.u('P33');
        a.u('P34');
        a.u('Y5');
        a.u('P35');
        a.u('Y6');
        a.u('P36');
        a.u('P37');
        a.u('P38');
        a.u('Y7');
        cc.refresh();
    },
    section_id: 0,
    section_update: function() {
        let PZ = player.position.z;
        switch (this.section_id) {
            case 0:
                if (PZ < -4.3700000000000045) {
                    speed = default_speed * 2.0;
                    steer = default_steer * 1.1;
                    a.cam_d(3.5);
                    a.g(null, 3.0, null);
                    this.section_id += 1
                }
                break;
            case 1:
                a.mov('P0', 'x', -2.0);
                a.mov('P1', 'x', 2.0);
                a.mov('P2', 'z', -2.0);
                a.mov('P3', 'z', -2.0);
                a.mov('P4', 'z', -2.0);
                a.mov('P5', 'z', -2.0);
                a.mov('P6', 'z', -2.0);
                a.mov('P7', 'z', -2.0);
                a.mov('P8', 'z', -2.0);
                a.mov('P9', 'z', -2.0);
                a.mov('P10', 'z', -2.0);
                a.mov('P11', 'z', -2.0);
                a.mov('P12', 'z', -2.0);
                a.mov('P13', 'z', -2.0);
                a.mov('P14', 'z', -2.0);
                a.mov('P15', 'z', -2.0);
                a.mov('P16', 'z', -2.0);
                a.mov('P17', 'z', -2.0);
                a.mov('P18', 'z', -2.0);
                a.mov('P19', 'z', -2.0);
                a.mov('Y0', 'z', -2.0);
                a.mov('P20', 'z', -2.0);
                a.mov('Y1', 'z', -2.0);
                a.mov('Y2', 'z', -2.0);
                a.mov('P21', 'z', -2.0);
                a.mov('P22', 'z', -2.0);
                a.mov('P23', 'z', -2.0);
                a.mov('P24', 'z', -2.0);
                a.mov('P25', 'z', -2.0);
                a.mov('P26', 'z', -2.0);
                a.mov('P27', 'z', -2.0);
                a.mov('P28', 'z', -2.0);
                a.mov('P29', 'z', -2.0);
                a.mov('P30', 'z', -2.0);
                a.mov('P31', 'z', -2.0);
                a.mov('Y3', 'z', -2.0);
                a.mov('Y4', 'z', -2.0);
                a.mov('P32', 'z', -2.0);
                a.mov('P33', 'z', -2.0);
                a.mov('P34', 'z', -2.0);
                a.mov('Y5', 'z', -2.0);
                a.mov('P35', 'z', -2.0);
                a.mov('Y6', 'z', -2.0);
                a.mov('P36', 'z', -2.0);
                a.mov('P37', 'z', -2.0);
                a.mov('P38', 'z', -2.0);
                a.mov('Y7', 'z', -2.0);
                if (PZ < -648.75) {
                    speed = cc.get("speed", null);
                    steer = cc.get("steer", null);
                    a.cam_d(null);
                    a.g(null, null, null);
                    this.section_id += 1
                }
                break;
        }
    },
    reset: function() {
        this.section_id = 0;
        a.re('P0', [1159.45, 0.98007, -675.8], [1.57, 0, 0], [16.98, 56.5, 1020.88]);
        a.re('P1', [-1159.56, 0.98014, -676.87], [1.57, 0, 0], [16.98, 56.5, 1020.88]);
        a.re('P2', [-4.34, -0.25978999999999997, -0.54], [0, 0, 0], [0.3, 0.52, 1.54]);
        a.re('P3', [-4.9, -0.9497199999999999, 0.88], [1.58, 0, 0], [0.3, 0.22, 0.34]);
        a.re('P4', [5.59, -0.27965, -1.99], [1.58, 0, 0], [0.3, 0.58, 1.74]);
        a.re('P5', [6.24, -0.95, 0.88], [1.58, 0, 0], [0.3, 0.22, 0.34]);
        a.re('P6', [6.8, -0.25993, -0.54], [0, 0, 0], [0.3, 0.52, 1.54]);
        a.re('P7', [4.88, -0.94986, 0.88], [1.58, 0, 0], [0.3, 0.22, 0.34]);
        a.re('P8', [-6.26, -0.94979, 0.88], [1.58, 0, 0], [0.3, 0.22, 0.34]);
        a.re('P9', [-5.55, -0.27972, -1.99], [1.58, 0, 0], [0.3, 0.58, 1.74]);
        a.re('P10', [0.07, -1.53965, 72.16], [0, 0, 0], [84.24, 41.32, 77.7]);
        a.re('P11', [5.59, -1.15, 0.8], [1.58, 0, 0], [0.3, 1.16, 2.2]);
        a.re('P12', [-4.4, -1.14993, -1.57], [0, 0, 0], [0.3, 1.16, 2.64]);
        a.re('P13', [-6.65, -1.14986, -1.46], [0, 0, 0], [0.3, 1.16, 2.64]);
        a.re('P14', [-5.55, -1.14979, -4.02], [1.58, 0, 0], [0.3, 1.16, 2.2]);
        a.re('P15', [-5.55, -0.27972, -1.87], [1.58, 0, 0], [0.3, 0.78, 2.2]);
        a.re('P16', [6.74, -1.14965, -1.57], [0, 0, 0], [0.3, 1.16, 2.64]);
        a.re('P17', [-4.47, -0.79, 0.14], [0, 0, 0], [0.3, 0.52, 1.54]);
        a.re('P18', [4.49, -1.14993, -1.46], [0, 0, 0], [0.3, 1.16, 2.64]);
        a.re('P19', [-6.63, -0.20986000000000002, -0.55], [0, 0, 0], [0.3, 0.74, 2.66]);
        a.re('Y0', [-6.7, -1.34979, -3.36], [1.58, 1.55, 0], [0.84, 0.44, 0.84]);
        a.re('P20', [-4.4, -0.20972000000000002, -0.55], [0, 0, 0], [0.3, 0.74, 2.66]);
        a.re('Y1', [-4.42, -1.34965, 0.18], [1.58, 1.55, 0], [0.84, 0.44, 0.84]);
        a.re('Y2', [-4.42, -1.35, -3.36], [1.58, 1.55, 0], [0.84, 0.44, 0.84]);
        a.re('P21', [-5.55, -1.14993, 0.8], [1.58, 0, 0], [0.3, 1.16, 2.2]);
        a.re('P22', [-5.52, 0.17013999999999999, -0.52], [0, 0, 0], [2, 0.48, 2.48]);
        a.re('P23', [-5.55, -0.27979, 0.78], [1.58, 0, 0], [0.3, 0.78, 2.2]);
        a.re('P24', [-6.66, -0.8697199999999999, -3.37], [0, 0, 0], [0.3, 0.42, 1.54]);
        a.re('P25', [-4.4, -0.86965, -3.37], [0, 0, 0], [0.3, 0.52, 1.54]);
        a.re('P26', [4.53, -0.79, 0.14], [0, 0, 0], [0.3, 0.52, 1.54]);
        a.re('P27', [-6.61, -0.7899299999999999, 0.14], [0, 0, 0], [0.3, 0.52, 1.54]);
        a.re('P28', [6.74, -0.8698600000000001, -3.37], [0, 0, 0], [0.3, 0.52, 1.54]);
        a.re('P29', [4.48, -0.86979, -3.37], [0, 0, 0], [0.3, 0.42, 1.54]);
        a.re('P30', [5.59, -0.27972, 0.78], [1.58, 0, 0], [0.3, 0.78, 2.2]);
        a.re('P31', [-5.52, -0.47965, -3.01], [0, 0, 0], [2, 0.48, 1.88]);
        a.re('Y3', [-6.63, -1.35, 0.18], [1.58, 1.55, 0], [0.84, 0.44, 0.84]);
        a.re('Y4', [4.5, -1.3499299999999999, 0.18], [1.58, 1.55, 0], [0.84, 0.44, 0.84]);
        a.re('P32', [6.74, -0.20986000000000002, -0.55], [0, 0, 0], [0.3, 0.74, 2.66]);
        a.re('P33', [5.75, -0.47979, -3.01], [0, 0, 0], [2, 0.48, 1.88]);
        a.re('P34', [4.51, -0.20972000000000002, -0.55], [0, 0, 0], [0.3, 0.74, 2.66]);
        a.re('Y5', [4.5, -1.34965, -3.17], [1.58, 1.55, 0], [0.84, 0.44, 0.84]);
        a.re('P35', [6.67, -0.79, 0.14], [0, 0, 0], [0.3, 0.52, 1.54]);
        a.re('Y6', [6.81, -1.3499299999999999, -3.17], [1.58, 1.55, 0], [0.84, 0.44, 0.84]);
        a.re('P36', [5.59, -0.27986, -1.87], [1.58, 0, 0], [0.3, 0.78, 2.2]);
        a.re('P37', [5.59, -1.14979, -4.02], [1.58, 0, 0], [0.3, 1.16, 2.2]);
        a.re('P38', [5.63, 0.17028, -0.52], [0, 0, 0], [2, 0.48, 2.48]);
        a.re('Y7', [6.81, -1.34965, 0.06], [1.58, 1.55, 0], [0.84, 0.44, 0.84]);
        a.re('P39', [8.4, -0.53, -566.79], [0, 0, 0], [11.44, 27.28, 1157.68]);
        a.re('P40', [-0.3, -1.74993, -700.88], [1.6, 0, 0], [2, 6.78, 8.36]);
        a.re('P41', [0, -4.34986, -466.6], [0, 0, 0], [907.18, 5.24, 945.14]);
        a.re('C0', [1.04, -1.1897199999999999, -668.32], [0, 0, 0], [2, 2, 2]);
        a.re('C1', [-2.16, -1.1896499999999999, -668.33], [0, 0, 0], [2, 2, 2]);
        a.re('P42', [1.79, -1.54, -57.24], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P43', [-2.64, -1.53993, -57.24], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P44', [2.13, -1.53986, -97.76], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P45', [-0.07, -1.5397900000000002, -77.71], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P46', [0.64, -1.53972, -97.76], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P47', [2.13, -1.53965, -116.18], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P48', [-2.74, -1.54, -116.22], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P49', [-2.58, -1.53993, -131.93], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P50', [-1.2, -1.53986, -131.91], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P51', [2.05, -1.5397900000000002, -158.02], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P52', [-2.58, -1.53972, -158.14], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P53', [2.05, -1.53965, -176.44], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P54', [0.58, -1.54, -176.45], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P55', [-0.96, -1.53993, -176.45], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P56', [0.54, -1.53986, -194.12], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P57', [-0.27, -1.5397900000000002, -194.06], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P58', [-1.43, -1.53972, -194.06], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P59', [1.79, -1.68965, -208.23], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P60', [-2.85, -1.69, -208.23], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P61', [1.79, -1.68993, -234.23], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P62', [0.62, -1.68986, -234.23], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P63', [-0.89, -1.6897900000000001, -248.52], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P64', [-2.4, -1.68972, -248.52], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P65', [-0.07, -1.68965, -263.96], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P66', [1.91, -1.69, -280.33], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P67', [-2.98, -1.68993, -280.07], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P68', [1.81, -1.68986, -299.23], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P69', [0.58, -1.6897900000000001, -299.23], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P70', [-2.88, -1.68972, -315.5], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P71', [-1.53, -1.68965, -315.5], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P72', [-0.53, -1.69, -336.81], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P73', [-0.53, -1.68993, -339.16], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P74', [-0.53, -1.68986, -341.74], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P75', [-0.53, -1.6897900000000001, -345.2], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P76', [-0.53, -1.68972, -348.21], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P77', [-0.53, -1.68965, -350.95], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P78', [-0.53, -1.69, -352.7], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P79', [-0.53, -1.68993, -354.45], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P80', [1.91, -1.68986, -374.61], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P81', [-2.9, -1.6897900000000001, -374.61], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P82', [-0.53, -1.68972, -394.18], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P83', [-0.53, -1.68965, -397.88], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P84', [-0.53, -1.69, -401.08], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P85', [-0.53, -1.68993, -403.85], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P86', [-2.8, -1.68986, -424.17], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P87', [-1.37, -1.6897900000000001, -424.17], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P88', [2.22, -1.68972, -442.55], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P89', [0.61, -1.68965, -442.55], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P90', [-0.47, -1.69, -461.88], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P91', [2.1, -1.68993, -478.11], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P92', [-2.82, -1.68986, -478.11], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P93', [2.05, -1.6897900000000001, -497.73], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P94', [0.7, -1.68972, -497.73], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P95', [-2.93, -1.68965, -497.76], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P96', [2.05, -1.69, -512.8], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P97', [-2.93, -1.68993, -512.84], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P98', [-1.74, -1.68986, -512.84], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P99', [0.12, -1.6897900000000001, -591.45], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P100', [2.23, -1.7497200000000002, -608.68], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P101', [-2.9, -1.74965, -608.68], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P102', [-0.02, -1.75, -646.36], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P103', [1.98, -1.74993, -666.65], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P104', [-3.07, -1.74986, -666.65], [0, 0, 0], [2, 6.78, 3.72]);
        a.re('P105', [-9.14, -0.52979, -566.79], [0, 0, 0], [11.44, 21.74, 1157.68]);
        a.re('E0', [-0.05, -1.61972, -697.28], [0, 0, 0], [1, 1, 1]);
    },
    physics_update: function() {},
    render_update: function() {}
}
