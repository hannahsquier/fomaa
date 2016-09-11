class AddDescriptionToNeighb < ActiveRecord::Migration[5.0]
  def change
    add_column :neighborhoods, :description, :text

  end
end
