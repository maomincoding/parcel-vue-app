# parcelVueApp
<p align="center">
<img src="https://www.maomin.club/data/logo.png" width="50%" alt="parcelVueCliLogo" title="parcelVueCliLogo"/>
</p>
<p align="center">Blazing fast, zero configuration vue application bundler.</p>


> You can install it through ParcelVueCli to build the project.
> https://www.npmjs.com/package/parcel-vue-cli


#### Installation

```
npm install
```

#### Instructions

1. Compiles and hot-reloads for development
```
npm run serve
```

2. Compiles and minifies for production
```
npm run build
```
#### Attention
If you need to introduce pictures, you may need to look at the following points.

Using the Parcel transformer `@parcel/transformer-image` you can resize, change the format and quality of an image. 

To do these image transformations we rely on the image transformation library Sharp, 
Therefore, you need to import several specific files into aspecific folder under the NPM cache path.

1. Get files

Open web address：
> `https://github.com/lovell/sharp-libvips/`

Find two files that match your computer environment.They are the following two files,`xxx` represents the computer environment.
```
libvips-8.9.0-xxx.tar.gz
libvips-8.10.5-xxx.tar.br
```
`darwin-x64` in Mac OS environment.

`win32-x64` in Windows environment.

2. Find folder

Type the following command to get the NPM cache path.
```
npm config get cache
```

After obtaining the path, under this path.Found `_libvips` this folder.Put the two files mentioned above into this folder and restart the installation command.
#### Contribution

1.  Fork the repository
2.  Create Feat_xxx branch
3.  Commit your code
4.  Create Pull Request
