var trigger = new ScrollTrigger.default({
    trigger: {
        once: false, // trigger 한번만 실행하겠다. true / false
        offset: {

        // element: {
        //     x: 0,
        //     y: 0.5  // 해당요소의 높이가 50% 화면에 노출이 될 경우
        //     }
            viewport: {
                x: 0,
                y: (trigger, frame, direction) => {
                    return trigger.visible ? 0 : 0.5   // 내 화면의 50% 영역이 보일경우
                }
            }
        },
    }
});
trigger.add('[data-trigger]');
trigger.add('[data-trigger2]');
trigger.add('[data-trigger3]');
trigger.add('[data-trigger4]');
trigger.add('[data-trigger5]');
trigger.add('[data-trigger6]');
trigger.add('[data-trigger7]');
trigger.add('[data-trigger8]');
trigger.add('[data-trigger9]');
trigger.add('[data-trigger10]');