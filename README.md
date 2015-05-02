# jsFFT

## Outline

FFT code and demo in Javascript. Shows forward, inverse and half-length real transforms.

## Real Valued Signal to Complex [See demo](http://watmough.github.io/jsFFT/Example.html "Real value signal to complex")

For a real valued signal, we must pad it into a complex signal and zero out the imaginary term. In the charts below, you can see this step of creating a new series of complex values. Real in blue, imaginary in red.

## Complex Forward FFT and Magnitude [See demo](http://watmough.github.io/jsFFT/Example.html)

The following shows the complex forward transform and magnitude of the complex signal.

## Full Length Inverse Transform [See demo](http://watmough.github.io/jsFFT/Example.html)

The transform of the complex signal can be inverse transformed back to the original signal by applying the FFT in the reverse direction and rescaling. The axes change slightly due to math errors since floating point math has only a finite accuracy.

## Packing a Real Signal to Half Complex [See demo](http://watmough.github.io/jsFFT/Example.html)

As a significant efficiency improvement, a signal that consists of only real values can be chopped in half and even n placed in the real part, and odd n placed in the complex part of a half length complex transform.

## Half Length FFT of Packed Real Signal [See demo](http://watmough.github.io/jsFFT/Example.html)

The half real transform allows a real transform to be split into a half length complex signal and transformed by a half length transform. Depending on processor, this may be significantly more efficient, more so than just the halving of the date length might indicate.

## Half Length Inverse Transform [See demo](http://watmough.github.io/jsFFT/Example.html)

Verification that the half length reverse transform works as expected.
