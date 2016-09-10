class CreateArts < ActiveRecord::Migration[5.0]
  def change
    create_table :arts do |t|
      t.references :neighborhood
      t.string :lat
      t.string :lng
      t.string :artist
      t.string :image_url
      t.timestamps
    end
  end
end
