# BazelWithLib

In many cases, the [rules_nodejs angular example](https://github.com/bazelbuild/rules_nodejs/tree/master/examples/angular) is a good reference, but there are some things that I had to figure out on my own:
* This project has multiple Angular libraries, with one depending on the other, and an application that depends on both libraries. The official example has a simple non-angular library.
* ~~This project uses a specific version of @angular/bazel for support with rules_nodejs 1.1.0 instead of the patch that is used in the Material repo and in the official example. (this should change very soon)~~ Angular bazel now supports rules_nodejs 1.x.

Overall, I just think it's a good thing to have more examples in the wild. I hope some find it useful!


note: I've only tested that `npm run build` and `npm run start` work. Unit tests and e2es are most likely broken

This is a test
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTkzMDgxOTkwMF19
-->