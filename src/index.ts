import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tweenStartLeft = {
	opacity: 0,
	translateY: '10px',
	rotateZ: -10,
}

const tweenStartRight = {
	opacity: 0,
	translateY: '90px',
	rotateZ: 10,
}

const tweenEnd1 = {
	opacity: 1,
	translateY: '0',
	rotateZ: 0,
	duration: 1,
}

const tweenEnd2 = {
	fontSize: 16,
}

const timeline = gsap.timeline({ paused: false })

timeline
	.fromTo('.top-word-1', tweenStartLeft, tweenEnd1, 'first')
	.fromTo('.top-word-2', tweenStartRight, tweenEnd1, 'first+=0.3')
	.to('.top-word-1', tweenEnd2, 'second')
	.to('.top-word-2', tweenEnd2, 'second')

const targets: Element[] = gsap.utils.toArray('h2')

gsap.to(targets[0], {
	scrollTrigger: {
		trigger: targets[0],
		scrub: 1,
		start: 'top+=150px center',
	},
	translateY: '-0.4em',
	rotationZ: -1.5,
	transformOrigin: 'left bottom',
})

gsap.to(targets[1], {
	scrollTrigger: {
		trigger: targets[1],
		scrub: 1,
		start: 'top+=200px center',
	},
	translateY: '-0.6em',
	rotationZ: 1.2,
	transformOrigin: 'left bottom',
})

gsap.to(targets[2], {
	scrollTrigger: {
		trigger: targets[2],
		scrub: 1,
		start: 'top+=150px center',
	},
	translateY: '-0.7em',
	rotationZ: 3.6,
	transformOrigin: 'left bottom',
})

gsap.to(targets[3], {
	scrollTrigger: {
		trigger: targets[3],
		scrub: 1,
		start: 'top+=200px center',
	},
	translateY: '-0.6em',
	rotationZ: 2.3,
	transformOrigin: 'left bottom',
})

gsap.to(targets[4], {
	scrollTrigger: {
		trigger: targets[4],
		scrub: 1,
		start: 'top+=150px center',
	},
	translateY: '-1em',
	rotationZ: 2.9,
	transformOrigin: 'left bottom',
})

gsap.to(targets[5], {
	scrollTrigger: {
		trigger: targets[5],
		scrub: 1,
		start: 'top+=200px center',
	},
	translateY: '-0.8em',
	rotationZ: -5,
	transformOrigin: 'right bottom',
})

gsap.to('body', {
	scrollTrigger: {
		trigger: '.center',
		start: 'top top',
		scrub: 1,
		markers: true,
	},
	backgroundColor: '#F4ED36',
})
