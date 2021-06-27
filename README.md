# TimeStats

Welcome to my first ever React app!

This app is meant to help implement the ideas by @deviparikh mentioned in her [Medium article](https://blog.usejournal.com/calendar-in-stead-of-to-do-lists-9ada86a512dd) to create "data" about your habits/routine/calendar. When that is done, there will also be a page where one can see their statistics and places where they can improve.

A long-term goal of this app is to create a calendar (hopefully similar to Google) which allows people to `play/pause/stop` their tasks and at the same time see them extend or reduce in size, and have a shadow of their expected timing in the background. The `Gallery View` of tasks will also be kept as an option, among other views.


**Personal Note**: I am obsessed with being productive and helping others be more productive. But, I will be honest, I did not know anything about React when I started working on this. I am not following any course either, and am going out of my comfort zone (Python :P) and planning to do everything in JavaScript. So, I am learning on-the-go and will probably take more time to do a particular thing than usual, or may be off the norm in my code/implementation. Please feel free to point it out if you ever get the time, or if there is anything you would like to see an improvement in. Any feedback is welcome :)

I will try to document everything that I am doing on this README this point onward.


## Updates
- **27-Jun-21**
    - Add deletion option in cards. Taken from [here](https://www.cloudhadoop.com/reactjs-remove-element-array/).
- **26-Jun-21**
    - Add basic card layout
        - Based on the first few lessons from [here](https://rangle.github.io/react-training/overview/).
    - Add timer option. I used the code from [this](https://gist.github.com/kshitijpurwar/4dc36c33b5ea36ca2e648f2ec0ff019d) gist and modified it slightly while adding to cards.
    - Add an add new entry option. Earlier I was using code based on an answer [here](https://stackoverflow.com/questions/35812562/push-component-to-array-of-components-reactjs), but then I switched to rendering only in the `render()` method, as initial state is needed for the components. I faced an issue because some variable was undefined in `handleDeleteClick` method as it was made using the initial state, but was needed during initial state creation (cyclic dependency?).